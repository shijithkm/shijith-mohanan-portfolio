"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Ops AI Agent",
        description:
            "AI-powered ServiceNow ticket automation platform with LangGraph multi-agent workflows, RAG knowledge base, Grafana alert suppression, and a real-time dashboard. Supports conversational ticket creation for RFI, RITM, and Incident types with smart intent classification.",
        tags: ["FastAPI", "LangGraph", "Next.js", "React", "Docker", "RAG", "Python"],
        github: "https://github.com/shijithkm/snow-agent",
        gradient: "from-primary/20 via-secondary/10 to-accent/20",
        emoji: "🤖",
    },
    {
        title: "RAG LangChain Pipeline",
        description:
            "Retrieval-Augmented Generation pipeline for intelligent document querying using LangChain, vector databases (FAISS), and Groq LLM. Enables context-aware AI responses grounded in real documents.",
        tags: ["Python", "LangChain", "FAISS", "Groq", "Jupyter"],
        github: "https://github.com/shijithkm/rag-langchain-pipeline",
        gradient: "from-secondary/20 via-accent/10 to-primary/20",
        emoji: "🧠",
    },
    {
        title: "SkipMyQueue",
        description:
            "Queue Management SaaS platform — a mobile-first, full-stack Next.js application for managing service bookings and eliminating physical queues. Features real-time wait times via SSE, multi-tenant architecture, QR code check-in, role-based access control, and PWA support.",
        tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth.js", "SSE"],
        github: "https://github.com/shijithkm/skipmyqueue-frontend",
        gradient: "from-accent/20 via-primary/10 to-secondary/20",
        emoji: "⚡",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[5%] top-[10%] h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionHeading
                        title="Featured Projects"
                        subtitle="A selection of projects that showcase my expertise across fullstack development and AI engineering."
                    />
                </AnimatedSection>

                <div className="grid gap-8 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <AnimatedSection key={project.title} delay={index * 0.15}>
                            <div className="glass card-glow group flex h-full flex-col rounded-2xl overflow-hidden">
                                {/* Project Image/Gradient Placeholder */}
                                <div
                                    className={`flex h-48 items-center justify-center bg-linear-to-br ${project.gradient}`}
                                >
                                    <span className="text-6xl">{project.emoji}</span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-3 text-xl font-bold text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
                                        >
                                            <FaGithub size={18} />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* View All Projects */}
                <AnimatedSection delay={0.4}>
                    <div className="mt-12 text-center">
                        <a
                            href="https://github.com/shijithkm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
                        >
                            <FaExternalLinkAlt size={14} />
                            View All Projects on GitHub
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
