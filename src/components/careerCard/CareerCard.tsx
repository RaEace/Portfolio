import "./CareerCard.css";
import { BPMBody, EFREIBody, SCADBody } from "./CareerCardBodies";

type CareerCardProps = {
  title: string;
  section: string;
};

const CareerCard: React.FC<CareerCardProps> = ({ title, section }) => {
  const handleSection = (): JSX.Element => {
    if (section.toLowerCase().includes("scad")) {
      return SCADBody;
    } else if (section.toLowerCase().includes("bpm")) {
      return BPMBody;
    } else if (section.toLowerCase().includes("efrei")) {
      return EFREIBody;
    }

    return <></>;
  };

  return (
    <div className="career-card">
      {handleSection()}
      <p className="career-card-footer">{title}</p>
    </div>
  );
};

export default CareerCard;
