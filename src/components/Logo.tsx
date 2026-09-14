type BrandSymbolProps = {
  className?: string;
  mono?: boolean | "current";
};

const CORES_COLORIDAS = {
  top: "#8B5CF6",
  left: "#2563EB",
  bottom: "#4F46E5",
  stem: "#2563EB",
};

export function BrandSymbol({ className, mono = false }: BrandSymbolProps) {
  const cores = mono === "current" ? "currentColor" : CORES_COLORIDAS;

  const fillTop = typeof cores === "string" ? cores : cores.top;
  const fillLeft = typeof cores === "string" ? cores : cores.left;
  const fillBottom = typeof cores === "string" ? cores : cores.bottom;
  const fillStem = typeof cores === "string" ? cores : cores.stem;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <rect x="9" y="8" width="30" height="7.5" rx="2.5" fill={fillTop} />
      <rect x="9" y="15.5" width="7.5" height="25" rx="2.5" fill={fillLeft} />
      <rect x="9" y="33" width="16" height="7.5" rx="2.5" fill={fillBottom} />
      <rect x="31.5" y="15.5" width="7.5" height="25" rx="2.5" fill={fillStem} />
    </svg>
  );
}

type LogoProps = {
  variant?: "horizontal" | "vertical" | "symbol";
  mono?: boolean | "current";
  className?: string;
  markClassName?: string;
};

export default function Logo({
  variant = "horizontal",
  mono = false,
  className = "",
  markClassName = "h-9 w-9",
}: LogoProps) {
  const textoBase =
    mono === "current"
      ? "text-current"
      : "text-slate-900 dark:text-white";
  const textoForte =
    mono === "current"
      ? "text-current"
      : "text-indigo-600 dark:text-white";

  if (variant === "symbol") {
    return (
      <span className={className} aria-label="Coisas de Tecnologia">
        <BrandSymbol mono={mono} className={`${markClassName} block`} />
      </span>
    );
  }

  if (variant === "vertical") {
    return (
      <span className={`${className} inline-flex flex-col items-center gap-2`}>
        <BrandSymbol mono={mono} className={`${markClassName} block`} />
        <span
          className={`${textoBase} font-heading text-base font-semibold leading-tight tracking-wide`}
        >
          COISAS DE
          <br />
          <span className={`${textoForte} text-lg font-extrabold tracking-[0.08em]`}>
            TECNOLOGIA
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`${className} inline-flex items-center gap-2.5`}>
      <BrandSymbol mono={mono} className={`${markClassName} block shrink-0`} />
      <span className={`${textoBase} font-heading text-sm font-semibold leading-tight tracking-wide`}>
        COISAS DE{" "}
        <span className={`${textoForte} text-base font-extrabold tracking-[0.06em]`}>
          TECNOLOGIA
        </span>
      </span>
    </span>
  );
}