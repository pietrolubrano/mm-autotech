export function LogoMark({ glow = false }: { glow?: boolean }) {
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-[#8a0014] ${glow ? "shadow-glow" : ""}`}
    >
      <span className="font-display text-sm font-extrabold tracking-tighter text-white">
        MM
      </span>
    </div>
  );
}
