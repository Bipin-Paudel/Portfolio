"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { portfolioData } from "@/data/portfolio";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/paudelbipin19@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: `New Message from Portfolio: ${data.name}`,
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to send message");

      const result = await response.json();

      if (
        result.success === "false" &&
        result.message?.toLowerCase().includes("activation")
      ) {
        setSubmitStatus("success");
        alert(
          "Almost there! Please check paudelbipin19@gmail.com and click 'Activate Form' to start receiving messages.",
        );
        reset();
        return;
      }

      if (result.success !== "true")
        throw new Error(result.message || "Failed to send");

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-6 sm:px-10 lg:px-20 py-24 scroll-mt-20">
      <div className="space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I&apos;m open to new opportunities, collaboration, or just a
            conversation. Drop a message and I&apos;ll reply as soon as I can.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch min-h-[600px]">
          {/* ── Left Column: Location & Map ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-medium text-foreground">
                  {portfolioData.about.address}
                </p>
              </div>
            </div>

            {/* Map (flex-1 and relative to stretch fully and match right col height) */}
            <div className="rounded-xl border border-border overflow-hidden flex-1 relative min-h-[350px]">
              {mounted && (
                <iframe
                  title="Location — Bharatpur, Nepal"
                  src="https://maps.google.com/maps?q=27.692132,84.442187&t=k&z=17&ie=UTF8&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </motion.div>

          {/* ── Right Column: Email, Socials & Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6"
          >
            {/* Top row: Email + Socials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href={`mailto:${portfolioData.about.email}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors h-full"
              >
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <p className="text-sm font-medium text-foreground truncate">
                    {portfolioData.about.email}
                  </p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-border bg-card flex flex-col justify-center h-full">
                <p className="text-xs text-muted-foreground mb-2">
                  Also find me on
                </p>
                <div className="flex gap-2">
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:bg-secondary text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:bg-secondary text-sm font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-xl p-8 flex-1 flex flex-col">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col flex-1 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-1 focus:ring-foreground/30 focus:border-foreground/30 transition-all text-sm"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{" "}
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-1 focus:ring-foreground/30 focus:border-foreground/30 transition-all text-sm"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{" "}
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 flex-1 flex flex-col min-h-[160px]">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    className="w-full flex-1 min-h-[120px] px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-1 focus:ring-foreground/30 focus:border-foreground/30 transition-all text-sm resize-none"
                    placeholder="What's on your mind?"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />{" "}
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.99] disabled:opacity-60 mt-auto"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </motion.span>
                    ) : submitStatus === "success" ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" /> Sent!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        Send Message <Send className="w-4 h-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                {submitStatus === "error" && (
                  <p className="text-center text-red-500 text-xs flex items-center justify-center gap-1 mt-2">
                    <AlertCircle className="w-3 h-3" /> Something went wrong.
                    Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
