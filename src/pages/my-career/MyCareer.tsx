import "./MyCareer.css";
import Timeline from "../../components/timeline/Timeline";
import CareerCard from "../../components/career-card/CareerCard";

const MyCareer = () => {
  return (
    <div className="career-container">
      <div className="timeline border-and-blur">
        <Timeline />
      </div>
      <div className="details">
        <div className="detail-item">
          <CareerCard />
        </div>
        <div className="detail-item">
          <CareerCard />
        </div>
        <div className="detail-item">
          <CareerCard />
        </div>
      </div>
    </div>
  );
};

export default MyCareer;
