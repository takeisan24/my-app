"use client";

const LoadingSpinner = ({ 
  size = "md", 
  color = "blue",
  text = "Loading..." 
}: {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "blue" | "purple" | "green" | "orange" | "red";
  text?: string;
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    blue: "border-blue-500",
    purple: "border-purple-500",
    green: "border-green-500", 
    orange: "border-orange-500",
    red: "border-red-500"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg", 
    xl: "text-xl"
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-gray-300/30 rounded-full`}></div>
        <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin absolute top-0 left-0`}></div>
      </div>
      
      {/* Loading Text */}
      {text && (
        <p className={`text-gray-400 ${textSizes[size]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

// Alternative Dot Spinner
export const DotSpinner = ({ 
  color = "blue",
  size = "md" 
}: {
  color?: "blue" | "purple" | "green" | "orange" | "red";
  size?: "sm" | "md" | "lg";
}) => {
  const colorClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500", 
    green: "bg-green-500",
    orange: "bg-orange-500",
    red: "bg-red-500"
  };

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s'
          }}
        ></div>
      ))}
    </div>
  );
};

// Pulse Spinner
export const PulseSpinner = ({
  color = "blue",
  size = "md"
}: {
  color?: "blue" | "purple" | "green" | "orange" | "red";
  size?: "sm" | "md" | "lg";
}) => {
  const colorClasses = {
    blue: "bg-blue-500/20 border-blue-500",
    purple: "bg-purple-500/20 border-purple-500",
    green: "bg-green-500/20 border-green-500", 
    orange: "bg-orange-500/20 border-orange-500",
    red: "bg-red-500/20 border-red-500"
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full border ${colorClasses[color]} animate-pulse`}></div>
  );
};

export default LoadingSpinner;
