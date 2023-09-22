import TextWithAnimation from "../../../../components/text-animation/TextWithAnimation";
import "./Description.css";

const Description: React.FC = () => {
  return (
    <div className="text-layout">
      <h2>HI THERE !</h2>
      <h1 className="presentation-layout">
        I'm <TextWithAnimation text="Jules Lagny" />
      </h1>
      <div className="desc-text">
        <p>
          As a fullstack developer with 3 years of experience, I am passionate
          about JavaScript technologies. <br /> I have worked on various
          projects that have allowed me to develop my skills in both frontend
          and backend development.
        </p>
      </div>
    </div>
  );
};

export default Description;
