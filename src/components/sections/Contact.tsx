"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const contactInfo = [
    {
        icon: HiEnvelope,
        label: "Email",
        value: "developer.shijith@gmail.com",
        href: "mailto:developer.shijith@gmail.com",
    },
    {
        icon: HiMapPin,
        label: "Location",
        value: "Ohio, USA",
        href: null,
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        value: "linkedin.com/in/shijithkm",
        href: "https://www.linkedin.com/in/shijithkm/",
    },
];

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/shijithkm", label: "GitHub" },
    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/shijithkm/",
        label: "LinkedIn",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/km.shijith/",
        label: "Instagram",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-secondary/5 blur-[120px]" />
                <div className="absolute left-[5%] bottom-[10%] h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-3xl">
                <AnimatedSection>
                    <SectionHeading
                        title="Get In Touch"
                        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
                    />
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="mb-4 text-2xl font-bold text-foreground">
                                Let&apos;s Build Something{" "}
                                <span className="gradient-text">Amazing</span>
                            </h3>
                            <p className="text-base leading-relaxed text-muted">
                                Whether you need a fullstack web application, an AI-powered
                                automation solution, or technical consulting — I&apos;m here
                                to help bring your vision to life.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="grid gap-4 sm:grid-cols-3">
                            {contactInfo.map((info) => (
                                <div
                                    key={info.label}
                                    className="glass card-glow flex flex-col items-center gap-3 rounded-xl p-6 text-center"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-primary/20 to-secondary/20">
                                        <info.icon className="text-xl text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-muted">
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-medium text-foreground">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="text-center">
                            <p className="mb-3 text-sm font-medium text-muted">
                                Find me on
                            </p>
                            <div className="flex justify-center gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="rounded-full border border-white/10 p-3 text-muted transition-all hover:border-primary/50 hover:text-primary"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
