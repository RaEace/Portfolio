import HomeBtn from "../../components/button/HomeBtn";
import "./Home.css";
import Description from "../../components/description/Description";
import HomePicture from "../../components/homePicture/HomePicture";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="img-item col">
        <HomePicture />
      </div>
      <div className="desc-item col">
        <Description />
        <div className="btn-section ">
          <HomeBtn name="A propos de moi" />
          <HomeBtn name="Mon parcours" />
        </div>
      </div>
    </div>
  );
};

export default Home;
