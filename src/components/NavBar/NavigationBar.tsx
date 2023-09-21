import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar container-fluid">
        <div className="p-2 logo-container">
          <li>
            <a>
              <b>Jules Lagny</b>
            </a>
          </li>
        </div>
        <div className="p-2">
          <li>
            <a>
              <b>About me</b>
            </a>
          </li>
          <li>
            <a>
              <b>My Career</b>
            </a>
          </li>
          <li>
            <a>
              <b>contact me!</b>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
