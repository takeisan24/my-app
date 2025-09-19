"use client";

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
}

const ProgressBar = ({
  value,
  max = 100,
  variant = "default",
  size = "md",
  showLabel = false,
  label,
  showPercentage = false,
  animated = false,
  className = ""
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };

  const variantClasses = {
    default: "bg-gradient-to-r from-blue-500 to-purple-600",
    success: "bg-gradient-to-r from-green-500 to-emerald-600",
    warning: "bg-gradient-to-r from-yellow-500 to-orange-600",
    danger: "bg-gradient-to-r from-red-500 to-pink-600",
    info: "bg-gradient-to-r from-cyan-500 to-blue-600"
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label and Percentage */}
      {(showLabel || showPercentage) && (
        <div className="flex justify-between items-center text-sm">
          {showLabel && label && (
            <span className="text-gray-300">{label}</span>
          )}
          {showPercentage && (
            <span className="text-gray-400">{Math.round(percentage)}%</span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div className={`w-full bg-white/10 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-500 ease-out ${
            animated ? "animate-pulse" : ""
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

// Circular Progress
export const CircularProgress = ({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  variant = "default",
  showPercentage = true,
  label,
  className = ""
}: {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  showPercentage?: boolean;
  label?: string;
  className?: string;
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const variantColors = {
    default: "stroke-blue-500",
    success: "stroke-green-500",
    warning: "stroke-yellow-500",
    danger: "stroke-red-500",
    info: "stroke-cyan-500"
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-white/10"
        />
        
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${variantColors[variant]} transition-all duration-500 ease-out`}
        />
      </svg>
      
      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showPercentage && (
          <span className="text-2xl font-bold text-white">
            {Math.round(percentage)}%
          </span>
        )}
        {label && (
          <span className="text-sm text-gray-400 mt-1">
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

// Step Progress
export const StepProgress = ({
  steps,
  currentStep,
  variant = "default",
  className = ""
}: {
  steps: string[];
  currentStep: number;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  className?: string;
}) => {
  const variantColors = {
    default: "bg-blue-500 border-blue-500",
    success: "bg-green-500 border-green-500",
    warning: "bg-yellow-500 border-yellow-500",
    danger: "bg-red-500 border-red-500",
    info: "bg-cyan-500 border-cyan-500"
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isPending = index > currentStep;

        return (
          <div key={index} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  isCompleted || isCurrent
                    ? `${variantColors[variant]} text-white`
                    : "border-white/30 text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              
              {/* Step Label */}
              <span className={`mt-2 text-xs text-center ${
                isCompleted || isCurrent ? "text-white" : "text-gray-400"
              }`}>
                {step}
              </span>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${
                isCompleted ? variantColors[variant].split(" ")[0] : "bg-white/20"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
