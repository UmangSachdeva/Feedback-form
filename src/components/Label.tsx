import React from "react";
import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label
      className={`block mb-1 text-sm font-medium text-white font-ae8ccaf text-[16px] ${props.className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
