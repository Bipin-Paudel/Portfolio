import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background py-8 mt-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {currentYear} {portfolioData.about.name}. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link
                        href={portfolioData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github size={20} />
                    </Link>
                    <Link
                        href={portfolioData.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href={portfolioData.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span className="sr-only">Twitter</span>
                        <Twitter size={20} />
                    </Link>
                    <Link
                        href={portfolioData.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span className="sr-only">Instagram</span>
                        <Instagram size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
