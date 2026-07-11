"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { portfolioData } from "@/data/portfolio";
import SectionShell from "./SectionShell";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "activation"
  >("idle");

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
        "https://formsubmit.co/ajax/info@paudelbipin.com.np",
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
        setSubmitStatus("activation");
        reset();
        return;
      }

      if (result.success !== "true")
        throw new Error(result.message || "Failed to send");

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle="I'm open to new opportunities, collaboration, or just a conversation. Drop a message and I'll reply as soon as I can."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ── Contact details ── */}
        <div className="lg:col-span-2 space-y-4">
          <a
            href={`mailto:${portfolioData.about.email}`}
            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm font-medium truncate">
                {portfolioData.about.email}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Location</p>
              <p className="text-sm font-medium">
                {portfolioData.about.address}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card">
            <p className="text-xs text-muted-foreground mb-3">
              Also find me on
            </p>
            <div className="space-y-2">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-md border border-border hover:bg-secondary text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4 shrink-0 text-muted-foreground" />
                GitHub
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-md border border-border hover:bg-secondary text-sm font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-muted-foreground" />
                LinkedIn
              </a>
              <a
                href={portfolioData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-md border border-border hover:bg-secondary text-sm font-medium transition-colors"
              >
                <Youtube className="w-4 h-4 shrink-0 text-muted-foreground" />
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* ── Form ── */}
        <div className="lg:col-span-3 bg-card border border-border rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="w-full px-3.5 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-sm"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name.message}
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
                  className="w-full px-3.5 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-sm"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full px-3.5 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors text-sm resize-none"
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <p className="text-sm text-primary flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Message sent! I&apos;ll get
                back to you soon.
              </p>
            )}
            {submitStatus === "activation" && (
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Message received. The form
                is still being activated, so email me directly if it&apos;s
                urgent.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-red-500 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Something went wrong.
                Please email me directly at {portfolioData.about.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
