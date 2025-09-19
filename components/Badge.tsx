"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Badge = ({ 
  children, 
  variant = "default", 
  size = "md",
  className = "" 
}: BadgeProps) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-300";
  
  const variantClasses = {
    default: "bg-gray-600/80 text-gray-200",
    primary: "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white",
    success: "bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-white",
    warning: "bg-gradient-to-r from-yellow-500/80 to-orange-500/80 text-white",
    danger: "bg-gradient-to-r from-red-500/80 to-pink-500/80 text-white",
    info: "bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white"
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
};

// Status Badge với icon
export const StatusBadge = ({ 
  status, 
  size = "md",
  className = "" 
}: {
  status: "online" | "offline" | "busy" | "away" | "active" | "inactive";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const statusConfig = {
    online: { variant: "success" as const, icon: "🟢", text: "Online" },
    offline: { variant: "default" as const, icon: "⚫", text: "Offline" },
    busy: { variant: "danger" as const, icon: "🔴", text: "Busy" },
    away: { variant: "warning" as const, icon: "🟡", text: "Away" },
    active: { variant: "primary" as const, icon: "🔵", text: "Active" },
    inactive: { variant: "default" as const, icon: "⚪", text: "Inactive" }
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} size={size} className={className}>
      <span className="mr-1">{config.icon}</span>
      {config.text}
    </Badge>
  );
};

// Number Badge (for notifications, counts, etc.)
export const NumberBadge = ({ 
  count, 
  max = 99,
  variant = "danger",
  size = "sm",
  className = ""
}: {
  count: number;
  max?: number;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const displayCount = count > max ? `${max}+` : count.toString();
  
  if (count === 0) return null;

  return (
    <Badge variant={variant} size={size} className={`${className} min-w-fit`}>
      {displayCount}
    </Badge>
  );
};

// Dot Badge (simple indicator)
export const DotBadge = ({ 
  variant = "primary",
  size = "md",
  animate = false,
  className = ""
}: {
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  className?: string;
}) => {
  const variantColors = {
    default: "bg-gray-500",
    primary: "bg-blue-500",
    success: "bg-green-500", 
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-cyan-500"
  };

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  return (
    <span 
      className={`inline-block rounded-full ${variantColors[variant]} ${sizeClasses[size]} ${
        animate ? "animate-pulse" : ""
      } ${className}`}
    />
  );
};

export default Badge;
