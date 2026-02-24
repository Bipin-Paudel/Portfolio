"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Mail, MapPin, CheckCircle, AlertCircle, MessageSquare, Linkedin, Github } from "lucide-react";
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
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
            // Using FormSubmit.co for direct, no-backend email delivery
            const response = await fetch("https://formsubmit.co/ajax/paudelbipin19@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: `New Message from Portfolio: ${data.name}`,
                }),
            });

            if (!response.ok) throw new Error("Failed to send message");

            const result = await response.json();

            // If activation is needed, FormSubmit returns success: false with a specific message
            if (result.success === "false" && result.message?.toLowerCase().includes("activation")) {
                setSubmitStatus("success"); // Treat as "pending success" to avoid showing the error UI
                alert("Almost there! Please check your email (paudelbipin19@gmail.com) and click 'Activate Form' to start receiving messages.");
                reset();
                return;
            }

            if (result.success !== "true") throw new Error(result.message || "Failed to send");

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

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: portfolioData.about.email,
            link: `mailto:${portfolioData.about.email}`,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: portfolioData.about.address,
            link: "https://www.google.com/maps/place/Bharatpur-11,+Chitwan",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
    ];

    return (
        <section id="contact" className="max-w-7xl mx-auto px-4 py-24 scroll-mt-20">
            <div className="space-y-16">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 pb-8 border-b border-border/40"
                >
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase">
                            <MessageSquare className="w-3 h-3" /> Connect
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            Let&apos;s <span className="gradient-text">Collaborate</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                            I&apos;m currently open to new opportunities and interesting projects.
                            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Form Column (Now on the Left) */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card dark:bg-card/80 p-8 md:p-12 rounded-[2.5rem] border-2 border-border/40 relative overflow-hidden shadow-2xl shadow-primary/10"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-sm font-bold tracking-tight px-1 uppercase text-muted-foreground/70">
                                            Your Name
                                        </label>
                                        <input
                                            id="name"
                                            {...register("name")}
                                            className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <p className="text-xs text-red-500 font-bold px-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className="text-sm font-bold tracking-tight px-1 uppercase text-muted-foreground/70">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            {...register("email")}
                                            className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-red-500 font-bold px-1 flex items-center gap-1">
                                                <AlertCircle className="w-3 h-3" /> {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-sm font-bold tracking-tight px-1 uppercase text-muted-foreground/70">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        {...register("message")}
                                        rows={5}
                                        className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium resize-none shadow-sm"
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && (
                                        <p className="text-xs text-red-500 font-bold px-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group relative flex items-center justify-center gap-3 py-5 px-8 rounded-2xl bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                                    >
                                        <AnimatePresence mode="wait">
                                            {isSubmitting ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Processing...
                                                </motion.div>
                                            ) : submitStatus === "success" ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="flex items-center gap-2 text-emerald-300"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                    Successfully Sent!
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="idle"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    Send Message
                                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>

                                {submitStatus === "error" && (
                                    <p className="text-center text-red-500 text-xs font-bold pt-2 flex items-center justify-center gap-1">
                                        <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again later.
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </div>

                    {/* Information Column (Now on the Right) */}
                    <div className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group glass rounded-3xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                                        <div className={`shrink-0 p-3 rounded-2xl ${info.bg} ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[13px] font-bold hover:text-primary transition-colors block truncate"
                                                    title={info.value}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-[13px] font-bold truncate" title={info.value}>{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Google Map */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-2 rounded-[2rem] border border-border/50 overflow-hidden group relative shadow-xl shadow-primary/5"
                        >
                            <div className="h-[350px] relative">
                                <iframe
                                    title="My Location Pin"
                                    src="https://maps.google.com/maps?q=27.692215,84.442018&t=&z=18&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-inner"
                                />

                                {/* Directions Overlay */}
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href="https://maps.app.goo.gl/erHwQGLcjLXgc3FQ6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                                    >
                                        <MapPin className="w-3 h-3" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
