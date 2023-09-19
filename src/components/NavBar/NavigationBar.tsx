import { useState } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <nav className="navbar">
      <ul className="container-fluid">
        <div className="left-element">
          <li>
            <a>
              <b>Jules Lagny</b>
            </a>
          </li>
        </div>
        <div className="right-element">
          <li>
            <a>
              <b>A propos de moi</b>
            </a>
          </li>
          <li>
            <a>
              <b>Mon parcours</b>
            </a>
          </li>
          <li>
            <a onClick={handleContactClick}>
              <b>Me contacter</b>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
