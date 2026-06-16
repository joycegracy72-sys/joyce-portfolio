"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Real-time validation
  const validateField = (
    name: string,
    value: string
  ): string | undefined => {
    switch (name) {
      case "name":
        return value.trim().length < 2
          ? "Name must be at least 2 characters"
          : undefined;
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email"
          : undefined;
      case "message":
        return value.trim().length < 10
          ? "Message must be at least 10 characters"
          : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate form submission
    try {
      // In production, you'd send this to your backend
      // For now, we'll just show success
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto">
      <Reveal>
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mb-2">
            Let's Connect
          </h2>
          <p className="text-slate-400">Have a project in mind? Let's collaborate.</p>
        </div>
      </Reveal>

      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/80 backdrop-blur-xl p-8 shadow-xl"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 pointer-events-none rounded-2xl" />

          <div className="relative z-10">
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm"
              >
                <p className="text-green-400 font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg border bg-white/5 backdrop-blur text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 ${
                    errors.name
                      ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                      : "border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-white/5 backdrop-blur text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 ${
                    errors.email
                      ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                      : "border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-white/5 backdrop-blur text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                      : "border-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Alternative contact */}
              <p className="text-center text-sm text-slate-400 mt-6">
                Or reach out directly:{" "}
                <a
                  href="mailto:joycegracy72@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  joycegracy72@gmail.com
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
