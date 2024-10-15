import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn(
      "bg-white/10 backdrop-blur-lg rounded-xl shadow-lg",
      "border border-white/20",
      "transition-all duration-300 ease-in-out",
      "hover:bg-white/20 hover:shadow-xl",
      className
    )}>
      {children}
    </div>
  )
}