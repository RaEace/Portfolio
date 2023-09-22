import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const navigation = useNavigate();

  const handleRedirect = (url: string) => {
    navigation(url);
  };

  return (
    <nav className="navbar">
      <ul className="navbar container-fluid">
        <div className="p-2 logo-container">
          <li>
            <a onClick={() => handleRedirect("/")}>
              <b>Jules Lagny</b>
            </a>
          </li>
        </div>
        <div className="p-2">
          <li>
            <a onClick={() => handleRedirect("/about-me")}>
              <b>About me</b>
            </a>
          </li>
          <li>
            <a onClick={() => handleRedirect("/career")}>
              <b>My Career</b>
            </a>
          </li>
          <li>
            <a onClick={() => handleRedirect("/contact-me")}>
              <b>contact me!</b>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
