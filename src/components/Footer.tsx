import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

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

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-surface py-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
                {/* Logo & Copyright */}
                <div className="flex items-center gap-2 text-sm text-muted">
                    <span>© {new Date().getFullYear()}</span>
                    <span className="gradient-text font-semibold">Shijith Mohanan</span>
                    <span className="hidden sm:inline">— Built with</span>
                    <HiHeart className="hidden text-red-400 sm:inline" />
                    <span className="hidden sm:inline">using Next.js & TailwindCSS</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="rounded-full border border-white/10 p-2.5 text-muted transition-all hover:border-primary/50 hover:text-primary"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
