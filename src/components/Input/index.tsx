import React from "react";
import { InputHTMLAttributes } from "react";
import { Container, InputContainer, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <Container>
      {label && <Label style={{ marginRight: "5px" }}>{label}:</Label>}
      <InputContainer placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
