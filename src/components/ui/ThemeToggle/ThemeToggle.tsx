import { useEffect, useState } from "react";
import { applyTheme } from "../scripts/theme";

type Props = {
  id?: string;
  className?: string;
  size?: "sm" | "md";
};

export default function ThemeToggle({
  id,
  className = "",
  size = "md",
}: Props) {
  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsLight(root.classList.contains("theme-light"));
    const handler = () => setIsLight(root.classList.contains("theme-light"));
    const observer = new MutationObserver(handler);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next = !isLight;
    applyTheme(next ? "light" : "dark");
    setIsLight(next);
  };

  const labelClass =
    size === "sm"
      ? "text-[14px] font-['Quicksand'] text-[#FDFDFD] transition-colors in-[.theme-light]:text-[#0A0D12]"
      : "text-[16px] font-['Quicksand'] text-[#FDFDFD] transition-colors in-[.theme-light]:text-[#0A0D12]";

  return (
    <button
      type="button"
      id={id}
      aria-label="Toggle theme"
      aria-pressed={isLight ? "true" : "false"}
      onClick={toggle}
      className={className}
    >
      <span className={labelClass}>{isLight ? "☀︎" : "🌙"}</span>
    </button>
  );
}
