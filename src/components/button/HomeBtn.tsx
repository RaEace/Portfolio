import React from "react";
import "./HomeBtn.css";
type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button className="glow-on-hover">{props.name}</button>;
};

export default Button;
