import React from "react";
import "./HomeBtn.css";
import { useNavigate } from "react-router-dom";
type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const navigation = useNavigate();

  const handleRedirect = () => {
    if (props.name === "A propos de moi") {
      navigation("/about-me");
    } else if (props.name === "Mon parcours") {
      navigation("/career");
    }
  };

  return (
    <button className="glow-on-hover" onClick={handleRedirect}>
      {props.name}
    </button>
  );
};

export default Button;
