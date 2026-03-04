interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
            )}
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-primary to-secondary" />
        </div>
    );
}
