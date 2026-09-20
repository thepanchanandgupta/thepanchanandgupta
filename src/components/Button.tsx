import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "icon";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant; }
export const Button = forwardRef<HTMLButtonElement, Props>(function Button({ variant = "primary", className, type = "button", ...props }, ref) {
  return <button ref={ref} type={type} className={cn("button", `button-${variant}`, className)} {...props} />;
});
