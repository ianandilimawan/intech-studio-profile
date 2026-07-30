"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
          {
            "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(37,99,235,0.4)]": variant === "primary",
            "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_rgba(14,165,233,0.4)]": variant === "secondary",
            "border border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm": variant === "outline",
            "hover:bg-white/10 text-white/80 hover:text-white": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children as React.ReactNode}</span>
        {/* Glow effect on hover */}
        {variant !== "ghost" && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
