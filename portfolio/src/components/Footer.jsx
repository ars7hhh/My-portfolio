import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-center">
        <p className="mono-label text-[10px] text-ink-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}