import HomeBtn from "../../components/button/HomeBtn";
import "./Home.css";
import Description from "./components/description/Description";
import HomePicture from "./components/home-picture/HomePicture";

const Home: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="img-item col-5">
          <HomePicture />
        </div>
        <div className="desc-item col-7">
          <div className="">
            <Description />
          </div>
          <div className="btn-section ">
            <HomeBtn name="A propos de moi" />
            <HomeBtn name="Mon parcours" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
