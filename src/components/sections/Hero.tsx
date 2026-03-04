"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const roles = [
    "Technical Solution Architect",
    "AI & ML Engineer",
    "Fullstack Developer",
    "React & Next.js Expert",
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

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        if (!isDeleting && displayText === currentRole) {
            const timeout = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && displayText === "") {
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }, speed);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setDisplayText(
                isDeleting
                    ? currentRole.substring(0, displayText.length - 1)
                    : currentRole.substring(0, displayText.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
            {/* Background Orbs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="animate-float absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
                <div className="animate-float-delayed absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
                <div className="animate-pulse-glow absolute left-[50%] top-[50%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[80px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 text-lg font-medium text-primary"
                >
                    Hello, I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
                >
                    <span className="text-foreground">Shijith </span>
                    <span className="gradient-text">Mohanan</span>
                </motion.h1>

                {/* Typing Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 h-10"
                >
                    <span className="text-xl font-medium text-muted sm:text-2xl">
                        {displayText}
                    </span>
                    <span className="typing-cursor text-xl sm:text-2xl" />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
                >
                    17+ years architecting enterprise solutions — from scalable fullstack
                    applications with React & Next.js to AI-powered automation with
                    LangGraph, RAG pipelines, and LLMs.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-12 flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="rounded-full bg-linear-to-r from-primary to-secondary px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center justify-center gap-4"
                >
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="rounded-full border border-white/10 p-3 text-muted transition-all hover:border-primary/50 hover:text-primary"
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <HiArrowDown size={24} />
                </motion.div>
            </motion.a>
        </section>
    );
}
