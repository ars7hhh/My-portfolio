import TiltCard from "./TiltCard";

export default function PhotoFrame({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/5]",
}) {
  return (
    <TiltCard maxTilt={6} className={`group ${className}`}>
      <div className={`frame-corners glass relative ${aspect} rounded-2xl overflow-hidden`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_35%,var(--color-accent-soft),transparent_65%)]">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-ink-faint"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </div>

            <span className="mono-label text-[9px] text-ink-faint text-center px-6">
              Awaiting Image
            </span>
          </div>
        )}
      </div>
    </TiltCard>
  );
}