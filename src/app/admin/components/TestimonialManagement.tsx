"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  rating: number;
  published: boolean;
}

export default function TestimonialManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Jaya",
      message: "Central Solusi Bisnis sangat membantu kami dalam meningkatkan efisiensi operasional perusahaan. Tim yang profesional dan solusi yang tepat sasaran.",
      rating: 5,
      published: true
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      position: "Direktur Keuangan",
      company: "CV Berkah Sejahtera",
      message: "Pelayanan yang luar biasa! Konsultasi keuangan yang diberikan sangat membantu kami dalam mengelola cashflow perusahaan.",
      rating: 5,
      published: true
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);
  const [saveMessage, setSaveMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    message: "",
    rating: 5,
    published: true
  });

  const handleEdit = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      message: testimonial.message,
      rating: testimonial.rating,
      published: testimonial.published
    });
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Yakin ingin menghapus testimoni ini?")) {
      setTestimonials(testimonials.filter(t => t.id !== id));
      setSaveMessage("Testimoni berhasil dihapus!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentTestimonial) {
      setTestimonials(testimonials.map(t => 
        t.id === currentTestimonial.id 
          ? { ...formData, id: currentTestimonial.id }
          : t
      ));
      setSaveMessage("Testimoni berhasil diupdate!");
    } else {
      const newTestimonial: Testimonial = {
        ...formData,
        id: Math.max(0, ...testimonials.map(t => t.id)) + 1
      };
      setTestimonials([newTestimonial, ...testimonials]);
      setSaveMessage("Testimoni berhasil ditambahkan!");
    }

    setFormData({
      name: "",
      position: "",
      company: "",
      message: "",
      rating: 5,
      published: true
    });
    setIsEditing(false);
    setCurrentTestimonial(null);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentTestimonial(null);
    setFormData({
      name: "",
      position: "",
      company: "",
      message: "",
      rating: 5,
      published: true
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manajemen Testimoni</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            + Tambah Testimoni
          </button>
        )}
      </div>

      {saveMessage && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {saveMessage}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jabatan *
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Perusahaan *
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Testimoni *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating (1-5)
            </label>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5 Bintang)</option>
              <option value={4}>⭐⭐⭐⭐ (4 Bintang)</option>
              <option value={3}>⭐⭐⭐ (3 Bintang)</option>
              <option value={2}>⭐⭐ (2 Bintang)</option>
              <option value={1}>⭐ (1 Bintang)</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
            />
            <label htmlFor="published" className="ml-2 text-sm text-gray-700">
              Tampilkan di website
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {currentTestimonial ? "Update Testimoni" : "Simpan Testimoni"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    {!testimonial.published && (
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Hidden</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {testimonial.position} - {testimonial.company}
                  </p>
                  <p className="text-gray-700 mb-2 italic">&quot;{testimonial.message}&quot;</p>
                  <div className="text-yellow-500">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}

          {testimonials.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Belum ada testimoni. Klik &quot;Tambah Testimoni&quot; untuk menambahkan testimoni baru.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
