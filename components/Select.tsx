"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Option[];
  placeholder?: string;
  variant?: "default" | "filled" | "outlined";
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  error,
  helperText,
  options,
  placeholder,
  variant = "default",
  className = "",
  ...props
}, ref) => {
  const baseClasses = "w-full px-4 py-3 bg-white/10 border rounded-xl text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer";
  
  const variantClasses = {
    default: "border-white/20 hover:border-white/30",
    filled: "border-transparent bg-white/15 hover:bg-white/20",
    outlined: "border-2 border-white/30 bg-transparent hover:border-white/50"
  };

  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          ref={ref}
          className={`${baseClasses} ${variantClasses[variant]} ${errorClasses} ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="text-gray-400">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="bg-slate-800 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {(error || helperText) && (
        <p className={`text-sm ${error ? 'text-red-400' : 'text-gray-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = "Select";

// Multi-Select Component (basic implementation)
export const MultiSelect = ({
  label,
  options,
  value = [],
  onChange,
  placeholder = "Select options...",
  className = ""
}: {
  label?: string;
  options: Option[];
  value?: (string | number)[];
  onChange?: (selected: (string | number)[]) => void;
  placeholder?: string;
  className?: string;
}) => {
  const handleToggle = (optionValue: string | number) => {
    if (!onChange) return;
    
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    
    onChange(newValue);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      
      <div className="space-y-2 max-h-48 overflow-y-auto bg-white/10 border border-white/20 rounded-xl p-3">
        {options.length === 0 ? (
          <p className="text-gray-400 text-sm">{placeholder}</p>
        ) : (
          options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={value.includes(option.value)}
                onChange={() => handleToggle(option.value)}
                disabled={option.disabled}
                className="w-4 h-4 text-blue-500 bg-white/10 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className={`text-sm ${option.disabled ? 'text-gray-500' : 'text-white'}`}>
                {option.label}
              </span>
            </label>
          ))
        )}
      </div>
      
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((selectedValue) => {
            const option = options.find(opt => opt.value === selectedValue);
            return option ? (
              <span
                key={selectedValue}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
              >
                {option.label}
                <button
                  onClick={() => handleToggle(selectedValue)}
                  className="text-blue-300 hover:text-white transition-colors duration-200"
                >
                  ×
                </button>
              </span>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
