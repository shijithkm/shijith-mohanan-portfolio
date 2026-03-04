"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
    HiCodeBracket,
    HiCpuChip,
    HiDevicePhoneMobile,
    HiServer,
    HiCloud,
    HiChatBubbleLeftRight,
} from "react-icons/hi2";

const services = [
    {
        icon: HiCodeBracket,
        title: "Fullstack Web Development",
        description:
            "End-to-end web applications with React/Next.js frontend and Node.js/Python backend. From concept to deployment, I build scalable, maintainable solutions.",
        color: "from-primary to-cyan-400",
    },
    {
        icon: HiCpuChip,
        title: "AI & Automation Solutions",
        description:
            "Intelligent agents, RAG pipelines, and LLM integration for enterprise workflows. Transforming manual processes into smart, automated systems.",
        color: "from-secondary to-blue-400",
    },
    {
        icon: HiDevicePhoneMobile,
        title: "Frontend Architecture",
        description:
            "Scalable, performant React/Next.js/Angular applications with modern patterns like micro-frontends, module federation, and state management.",
        color: "from-accent to-purple-400",
    },
    {
        icon: HiServer,
        title: "API Development",
        description:
            "RESTful APIs with Node.js, NestJS, or FastAPI. Includes authentication, authorization, database design, and comprehensive documentation.",
        color: "from-emerald-500 to-green-400",
    },
    {
        icon: HiCloud,
        title: "Cloud & DevOps",
        description:
            "Azure pipelines, Docker containerization, CI/CD workflows, and deployment to Vercel, Firebase, or Azure. Infrastructure as code best practices.",
        color: "from-orange-500 to-amber-400",
    },
    {
        icon: HiChatBubbleLeftRight,
        title: "Consulting & Code Review",
        description:
            "Architecture reviews, performance optimization, technology strategy, and mentoring. Helping teams build better software faster.",
        color: "from-rose-500 to-pink-400",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[15%] bottom-[10%] h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute right-[20%] top-[20%] h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionHeading
                        title="Services"
                        subtitle="What I can help you build. From modern web apps to AI-powered automation."
                    />
                </AnimatedSection>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <AnimatedSection key={service.title} delay={index * 0.1}>
                            <div className="glass card-glow group h-full rounded-2xl p-6">
                                {/* Icon */}
                                <div
                                    className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${service.color} p-3`}
                                >
                                    <service.icon className="text-2xl text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 text-lg font-semibold text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted">
                                    {service.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
