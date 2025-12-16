import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
    variant?: "primary" | "white" | "black";
    size?: "sm" | "md" | "lg";
  }
>;

export default function Button({
  className,
  fullWidth,
  variant = "primary",
  size = "md",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-['Quicksand'] font-bold focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";
  const sizes: Record<typeof size, string> = {
    sm: "px-4 h-9 text-[12px]/[24px]",
    md: "px-5 h-11 text-[14px]/[28px]",
    lg: "px-6 h-12 text-[16px]/[30px]",
  };
  const variants: Record<typeof variant, string> = {
    primary:
      "bg-[#FF623E] text-white shadow-[inset_4px_4px_4px_0px_#FFFFFF40] focus-visible:ring-2 focus-visible:ring-[#FF623E] hover:bg-[#FF6C37] active:bg-[#E9552F]",
    white:
      "bg-white text-black shadow-[inset_4px_4px_4px_0px_#FFFFFF40] focus-visible:ring-2 focus-visible:ring-[#FF623E]",
    black:
      "bg-black text-white shadow-[inset_4px_4px_4px_0px_#FFFFFF40] focus-visible:ring-2 focus-visible:ring-[#FF623E]",
  };
  const width = fullWidth ? "w-full" : "";
  return (
    <button
      className={[base, sizes[size], variants[variant], width, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
