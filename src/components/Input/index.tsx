import { InputHTMLAttributes } from "react";
import { Inputs } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <div>
      <Inputs {...rest} placeholder={placeholder} />
      <label>{label}</label>
    </div>
  );
};
export default Input;
