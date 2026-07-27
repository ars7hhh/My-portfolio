import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="mono-label text-[10px] text-ink-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="mono-label text-[10px] text-ink-faint hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="mono-label text-[10px] text-ink-faint hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Saheed's LinkedIn profile"
            className="glow-hover glass w-8 h-8 rounded-full flex items-center justify-center text-ink-faint hover:text-accent transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
