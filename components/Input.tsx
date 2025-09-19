"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "outlined";
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  variant = "default",
  className = "",
  ...props
}, ref) => {
  const baseClasses = "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
  const variantClasses = {
    default: "border-white/20 hover:border-white/30",
    filled: "border-transparent bg-white/15 hover:bg-white/20",
    outlined: "border-2 border-white/30 bg-transparent hover:border-white/50"
  };

  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";
  const iconPadding = leftIcon ? "pl-12" : rightIcon ? "pr-12" : "";

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={`${baseClasses} ${variantClasses[variant]} ${errorClasses} ${iconPadding} ${className}`}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <p className={`text-sm ${error ? 'text-red-400' : 'text-gray-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

// Search Input
export const SearchInput = forwardRef<HTMLInputElement, Omit<InputProps, 'leftIcon' | 'type'>>(({
  placeholder = "Search...",
  ...props
}, ref) => {
  return (
    <Input
      ref={ref}
      type="search"
      placeholder={placeholder}
      leftIcon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
      {...props}
    />
  );
});

SearchInput.displayName = "SearchInput";

// Number Input with increment/decrement buttons
export const NumberInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'> & {
  min?: number;
  max?: number;
  step?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}>(({
  min,
  max,
  step = 1,
  onIncrement,
  onDecrement,
  value,
  onChange,
  ...props
}, ref) => {
  const handleIncrement = () => {
    if (onIncrement) {
      onIncrement();
    } else if (onChange) {
      const currentValue = Number(value) || 0;
      const newValue = currentValue + step;
      if (max === undefined || newValue <= max) {
        onChange({ target: { value: newValue.toString() } } as any);
      }
    }
  };

  const handleDecrement = () => {
    if (onDecrement) {
      onDecrement();
    } else if (onChange) {
      const currentValue = Number(value) || 0;
      const newValue = currentValue - step;
      if (min === undefined || newValue >= min) {
        onChange({ target: { value: newValue.toString() } } as any);
      }
    }
  };

  return (
    <Input
      ref={ref}
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      rightIcon={
        <div className="flex flex-col">
          <button
            type="button"
            onClick={handleIncrement}
            className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
          >
            ▲
          </button>
          <button
            type="button"
            onClick={handleDecrement}
            className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
          >
            ▼
          </button>
        </div>
      }
      {...props}
    />
  );
});

NumberInput.displayName = "NumberInput";

export default Input;
