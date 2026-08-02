import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-ink-0 text-surface-0 hover:opacity-90 active:translate-y-px",
        accent:
          "bg-accent text-accent-ink hover:opacity-90 active:translate-y-px",
        outline:
          "border border-line-strong text-ink-0 hover:bg-surface-2 active:translate-y-px",
        ghost: "text-ink-1 hover:bg-surface-2 hover:text-ink-0",
        link: "text-ink-0 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-body-sm",
        sm: "h-9 px-4 text-body-sm",
        lg: "h-13 px-8 text-body",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
