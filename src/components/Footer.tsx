import { Terminal } from "lucide-react";
import { navLinks, profile } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
          <Terminal className="h-4 w-4 text-neon-cyan" aria-hidden />
          shahroz<span className="text-neon-cyan">.dev</span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-slate-500 transition-colors hover:text-neon-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
