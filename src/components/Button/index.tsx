import { ButtonHTMLAttributes } from "react";
import { Buttons } from "./styles";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button = ({ children, ...rest }: ButtonProp) => {
  return (
    <div>
      <Buttons {...rest}>{children}</Buttons>
    </div>
  );
};
export default Button;
