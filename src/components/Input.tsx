import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, endIcon, ...props }, ref) => {
    return (
      <div>
        {startIcon && (
          <div className="absolute flex items-center text-gray-400 left-3">
            {startIcon}
          </div>
        )}
        <input
          className={`w-full border bg-transparent rounded-xl border-text px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            startIcon ? "pl-10" : ""
          } ${endIcon ? "pr-10" : ""} ${className}`}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute flex items-center text-gray-400 left-3">
            {startIcon}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
