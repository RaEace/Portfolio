import HomeBtn from "../../components/button/HomeBtn";
import "./Home.css";
import Description from "./components/description/Description";
import HomePicture from "./components/home-picture/HomePicture";

const Home: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="item col-5">
          <HomePicture />
        </div>
        <div className="item col-7">
          <div className="d-flex flex-col">
            <Description />
            <div className="btn-section">
              <div className="p-2">
                <HomeBtn name="A propos de moi" />
              </div>
              <div className="p-2">
                <HomeBtn name="Mon parcours" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
