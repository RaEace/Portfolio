import React from "react";
import "./HomeBtn.css";
type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div className="">
      <button className="glow-on-hover">{props.name}</button>;
    </div>
  );
};

export default Button;
