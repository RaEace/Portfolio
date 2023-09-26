import "./MyCareer.css";
import Timeline from "../../components/timeline/Timeline";
import CareerCard from "../../components/careerCard/CareerCard";

const MyCareer = () => {
  return (
    <div className="career-container">
      <div className="timeline border-and-blur">
        <Timeline />
      </div>
      <div className="details">
        <div className="detail-item">
          <CareerCard title="Société Générale - SCAD team" section="SCAD" />
        </div>
        <div className="detail-item">
          <CareerCard title="Société Générale - BPM team" section="BPM" />
        </div>
        <div className="detail-item">
          <CareerCard title="EFREI Paris" section="EFREI" />
        </div>
      </div>
    </div>
  );
};

export default MyCareer;
