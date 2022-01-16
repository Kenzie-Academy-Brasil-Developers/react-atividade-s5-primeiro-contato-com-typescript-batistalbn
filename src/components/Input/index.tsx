import React from "react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <div style={{ border: "red" }}>
      {label && <label style={{ marginRight: "5px" }}>{label}:</label>}
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
