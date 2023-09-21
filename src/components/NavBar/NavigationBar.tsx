import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar container-fluid">
        <div className="p-2">
          <li>
            <a>
              <b>Jules Lagny</b>
            </a>
          </li>
        </div>
        <div className="p-2">
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
            <a>
              <b>Me contacter</b>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
