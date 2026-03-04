"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiTypescript,
    SiTailwindcss,
    SiMui,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiFastapi,
    SiLaravel,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiFirebase,
    SiVercel,
    SiRedux,
    SiGit,
    SiPython,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { HiCpuChip, HiSparkles } from "react-icons/hi2";

const skillCategories = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
            { name: "Angular", icon: SiAngular, color: "#DD0031" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Material UI", icon: SiMui, color: "#007FFF" },
        ],
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#ffffff" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        ],
    },
    {
        title: "AI / ML",
        icon: "🤖",
        skills: [
            { name: "LangGraph", icon: HiSparkles, color: "#06B6D4" },
            { name: "LangChain", icon: HiCpuChip, color: "#3B82F6" },
            { name: "RAG", icon: HiSparkles, color: "#8B5CF6" },
            { name: "Groq LLM", icon: HiCpuChip, color: "#F59E0B" },
            { name: "FAISS", icon: HiCpuChip, color: "#10B981" },
            { name: "Agentic AI", icon: HiSparkles, color: "#EC4899" },
        ],
    },
    {
        title: "Database",
        icon: "🗄️",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: "☁️",
        skills: [
            { name: "Azure", icon: FaMicrosoft, color: "#0078D4" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        ],
    },
    {
        title: "Tools & Other",
        icon: "🛠️",
        skills: [
            { name: "Redux", icon: SiRedux, color: "#764ABC" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "REST APIs", icon: HiCpuChip, color: "#06B6D4" },
            { name: "JWT Auth", icon: HiCpuChip, color: "#D63AFF" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-6">
            {/* Background accent */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-secondary/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionHeading
                        title="Skills & Expertise"
                        subtitle="Technologies and tools I use to turn ideas into powerful, scalable applications."
                    />
                </AnimatedSection>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, catIndex) => (
                        <AnimatedSection key={category.title} delay={catIndex * 0.1}>
                            <div className="glass card-glow h-full rounded-2xl p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="text-2xl">{category.icon}</span>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                                        >
                                            <skill.icon
                                                size={16}
                                                style={{ color: skill.color }}
                                            />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
