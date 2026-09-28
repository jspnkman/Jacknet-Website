import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

  const variants = {
    primary:
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.06)] hover:opacity-95 hover:shadow-[0_1px_2px_rgba(0,0,0,0.10),0_4px_12px_rgba(0,0,0,0.10)] focus-visible:ring-[hsl(var(--primary))]",
    secondary:
      "bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-[hsl(var(--muted))]/70 focus-visible:ring-[hsl(var(--muted))]",
    ghost:
      "bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]/60 focus-visible:ring-[hsl(var(--muted))]",
  };

  const sizes = {
    sm: "text-[13px] px-4 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}