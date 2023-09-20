import "./Home.css";
import Description from "./components/description/Description";
import HomePicture from "./components/home-picture/HomePicture";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <div className="col-4 center">
          <HomePicture />
        </div>
        <div className="col-8 center">
          <Description />
        </div>
      </div>
    </div>
  );
};

export default Home;
