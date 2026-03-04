"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { HiBriefcase, HiCode, HiSparkles } from "react-icons/hi";

const stats = [
    { icon: HiBriefcase, value: "17+", label: "Years Experience" },
    { icon: HiCode, value: "40+", label: "Projects Delivered" },
    { icon: HiSparkles, value: "AI/ML", label: "Solutions Architect" },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionHeading
                        title="About Me"
                        subtitle="Get to know who I am and what drives my passion for building exceptional software."
                    />
                </AnimatedSection>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Profile Image Placeholder */}
                    <AnimatedSection delay={0.1}>
                        <div className="relative mx-auto w-full max-w-md">
                            <div className="glass card-glow overflow-hidden rounded-2xl p-1">
                                <div className="overflow-hidden rounded-xl">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Shijith Mohanan"
                                        width={400}
                                        height={400}
                                        className="aspect-square w-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Decorative gradient blob */}
                            <div className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-[60px]" />
                            <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-secondary/20 blur-[60px]" />
                        </div>
                    </AnimatedSection>

                    {/* Bio & Stats */}
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-foreground">
                                Technical Solution Architect &{" "}
                                <span className="gradient-text">AI Engineer</span>
                            </h3>

                            <div className="space-y-4 text-base leading-relaxed text-muted">
                                <p>
                                    I&apos;m a Technical Solution Architect at{" "}
                                    <span className="font-medium text-foreground">
                                        LTM
                                    </span>
                                    , based in Ohio, USA, with over 17 years of experience
                                    designing and delivering enterprise-grade solutions that
                                    prioritize scalability, performance, security, and
                                    exceptional user experience.
                                </p>
                                <p>
                                    My career spans the full spectrum of software
                                    architecture—from leading complex fullstack projects with
                                    React, Next.js, Angular, and Node.js to designing
                                    microservices, cloud-native systems on Azure, and CI/CD
                                    pipelines. I&apos;ve led teams, defined technical roadmaps,
                                    and driven adoption of modern engineering practices across
                                    large-scale enterprise programs.
                                </p>
                                <p>
                                    More recently, I&apos;ve been at the forefront of the AI
                                    revolution—building multi-agent systems with LangGraph,
                                    developing RAG pipelines with LangChain and FAISS,
                                    integrating LLMs (Groq, OpenAI) into enterprise workflows,
                                    and architecting end-to-end AI automation platforms. I&apos;m
                                    passionate about bridging the gap between traditional
                                    software engineering and intelligent AI-driven solutions.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="glass card-glow rounded-xl p-4 text-center"
                                    >
                                        <stat.icon className="mx-auto mb-2 text-2xl text-primary" />
                                        <div className="text-2xl font-bold gradient-text">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-muted">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Download Resume Button */}
                            <div className="pt-2">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                                >
                                    Let&apos;s Connect
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
