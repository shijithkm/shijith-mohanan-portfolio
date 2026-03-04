"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { HiExternalLink } from "react-icons/hi";
import {
    SiUdemy,
    SiCoursera,
    SiGooglecloud,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const certifications = [
    {
        title: "GitHub Copilot Beginner to Pro — AI for Coding & Development",
        issuer: "Udemy",
        issued: "May 2025",
        icon: SiUdemy,
        iconColor: "#A435F0",
        credentialUrl:
            "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fd426766-6d0c-4d82-bb6d-ed5976d4b488.pdf",
    },
    {
        title: "GCP ACE — Google Cloud Associate Cloud Engineer",
        issuer: "Udemy",
        issued: "May 2023",
        icon: SiGooglecloud,
        iconColor: "#4285F4",
        credentialUrl:
            "https://www.udemy.com/certificate/UC-9f7d0ae4-a4ae-4438-a7fd-3a87b0d89ffe/",
    },
    {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        issued: "Aug 2021",
        icon: FaMicrosoft,
        iconColor: "#00A4EF",
        credentialUrl:
            "https://www.credly.com/badges/026a98bc-f965-4798-b0f6-d4acea379420?source=linked_in_profile",
    },
    {
        title: "Microsoft Certified: Azure Data Fundamentals",
        issuer: "Microsoft",
        issued: "Dec 2021",
        icon: FaMicrosoft,
        iconColor: "#00A4EF",
        credentialUrl:
            "https://www.credly.com/badges/3f269ca2-a554-4e3e-a7a0-aeed9beedadc?source=linked_in_profile",
    },
    {
        title: "Server-side Development with Node.js, Express and MongoDB",
        issuer: "Coursera",
        issued: "Nov 2018",
        icon: SiCoursera,
        iconColor: "#0056D2",
        credentialUrl:
            "https://www.coursera.org/account/accomplishments/verify/5SF54ZRV48K6",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative py-24 px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />
                <div className="absolute right-[15%] bottom-[15%] h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                <AnimatedSection>
                    <SectionHeading
                        title="Certifications"
                        subtitle="Professional credentials that validate my expertise across cloud, AI, and web technologies."
                    />
                </AnimatedSection>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <AnimatedSection key={cert.title} delay={index * 0.1}>
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass card-glow group flex h-full flex-col rounded-2xl p-6 transition-all"
                            >
                                {/* Header: Icon + Issuer */}
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                                        <cert.icon
                                            size={24}
                                            style={{ color: cert.iconColor }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-xs text-muted">
                                            Issued {cert.issued}
                                        </p>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="mb-4 flex-1 text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>

                                {/* Credential Link */}
                                <div className="flex items-center gap-1.5 text-xs font-medium text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                                    <HiExternalLink size={14} />
                                    Show Credential
                                </div>
                            </a>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
