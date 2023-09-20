import "./Home.css";
import Description from "./components/description/Description";
import HomePicture from "./components/home-picture/HomePicture";

const Home = () => {
  return (
    <div className="container">
      <div className="item col-4">
        <HomePicture />
      </div>
      <div className="item col-8 ">
        <Description />
      </div>
    </div>
  );
};

export default Home;
