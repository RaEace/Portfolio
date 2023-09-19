import "./Home.css";
import Description from "./components/description/Description";
import HomePicture from "./components/home-picture/HomePicture";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <div className="col-8 item">
          <Description />
        </div>
        <div className="col-4 item container">
          <HomePicture />
        </div>
      </div>
    </div>
  );
};

export default Home;
