import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-[var(--color-red)] text-white hover:bg-[#c8101b] focus-visible:ring-[var(--color-red)]",
  secondary:
    "bg-[var(--color-gray-800)] text-white hover:bg-[var(--color-gray-700)] focus-visible:ring-[var(--color-gray-700)]",
  outline:
    "border border-white/30 text-white hover:bg-white/10 focus-visible:ring-white",
  ghost:
    "text-[var(--color-tech)] hover:bg-[var(--color-tech)]/10 focus-visible:ring-[var(--color-tech)]",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
