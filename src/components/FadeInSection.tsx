"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function FadeInSection({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      });
    }, {
      threshold: 0.1
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-8 opacity-0";
        case "down":
          return "-translate-y-8 opacity-0";
        case "left":
          return "translate-x-8 opacity-0";
        case "right":
          return "-translate-x-8 opacity-0";
        default:
          return "opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 opacity-100";
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
