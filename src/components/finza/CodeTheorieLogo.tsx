import { cn } from "@/lib/utils";

interface CodeTheorieLogoProps {
  className?: string;
}

/** Code Theorie brand mark (app icon) with the product name, used in every page header. */
export function CodeTheorieLogo({ className }: CodeTheorieLogoProps) {
  return (
    <span className={cn("flex min-w-0 items-center gap-3", className)}>
      <img
        src="/code-theorie-icon.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 shrink-0 rounded-xl sm:h-12 sm:w-12"
        loading="eager"
      />
      <span className="truncate text-lg font-extrabold tracking-tight text-finza-ink sm:text-xl">
        Code Theorie
      </span>
      <span className="sr-only"> — Code Theorie</span>
    </span>
  );
}
