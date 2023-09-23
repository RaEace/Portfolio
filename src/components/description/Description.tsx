import TextWithAnimation from "../text-animation/TextWithAnimation";
import "./Description.css";

const Description: React.FC = () => {
  return (
    <div className="description text-layout">
      <h1 className="presentation-layout">
        Hey, I'm <TextWithAnimation text="Jules" />
      </h1>
      <div className="desc-text">
        <p>
          A fullstack developer with 3 years of experience. <br />
          I am passionate about JavaScript technologies. <br /> I have worked on
          various projects that have allowed me to develop my skills in both
          frontend and backend development.
        </p>
      </div>
    </div>
  );
};

export default Description;
