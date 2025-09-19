"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "bordered";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Card = ({ 
  children, 
  className = "", 
  variant = "default",
  hover = true,
  padding = "md"
}: CardProps) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/5 backdrop-blur-sm border border-white/10",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-white/10 to-white/5 border border-white/20",
    bordered: "bg-slate-800/50 border-2 border-slate-600 hover:border-slate-500"
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6", 
    lg: "p-8",
    xl: "p-10"
  };

  const hoverClasses = hover ? "hover:bg-white/8 hover:scale-[1.02] hover:shadow-2xl" : "";

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

// Specialized Card Components
export const StatsCard = ({ 
  title, 
  value, 
  icon, 
  change,
  changeType = "neutral",
  className = "" 
}: {
  title: string;
  value: string | number;
  icon?: ReactNode;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  className?: string;
}) => {
  const changeColors = {
    positive: "text-green-400",
    negative: "text-red-400", 
    neutral: "text-gray-400"
  };

  return (
    <Card variant="glass" className={className}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="text-3xl opacity-80">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export const FeatureCard = ({
  icon,
  title,
  description,
  href,
  className = ""
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}) => {
  const CardContent = (
    <Card variant="glass" hover={!!href} className={className}>
      <div className="text-center space-y-4">
        <div className="text-4xl mx-auto w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="block group">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  href,
  className = ""
}: {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  href?: string;
  className?: string;
}) => {
  const CardContent = (
    <Card variant="gradient" hover={!!href} className={className}>
      {image && (
        <div className="w-full h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
          <span className="text-4xl">🚀</span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );

  if (href) {
    return (
      <a href={href} className="block group">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default Card;
