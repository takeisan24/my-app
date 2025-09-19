"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "filled" | "outlined";
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  error,
  helperText,
  variant = "default",
  resize = "vertical",
  className = "",
  rows = 4,
  ...props
}, ref) => {
  const baseClasses = "w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  
  const variantClasses = {
    default: "border-white/20 hover:border-white/30",
    filled: "border-transparent bg-white/15 hover:bg-white/20",
    outlined: "border-2 border-white/30 bg-transparent hover:border-white/50"
  };

  const resizeClasses = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x", 
    both: "resize"
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
        <textarea
          ref={ref}
          rows={rows}
          className={`${baseClasses} ${variantClasses[variant]} ${resizeClasses[resize]} ${errorClasses} ${className}`}
          {...props}
        />
        
        {/* Character count if maxLength is provided */}
        {props.maxLength && (
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
            {props.value?.toString().length || 0}/{props.maxLength}
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

TextArea.displayName = "TextArea";

// Auto-resize TextArea
export const AutoResizeTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  ...props
}, ref) => {
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    if (props.onInput) {
      props.onInput(e);
    }
  };

  return (
    <TextArea
      ref={ref}
      resize="none"
      onInput={handleInput}
      style={{ minHeight: '100px' }}
      {...props}
    />
  );
});

AutoResizeTextArea.displayName = "AutoResizeTextArea";

export default TextArea;
