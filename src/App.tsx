import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyCareer from "./pages/myCareer/MyCareer";
import AboutMe from "./pages/aboutMe/AboutMe";
import Home from "./pages/Home/Home";
import NavigationBar from "./components/NavBar/NavigationBar";

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/career" element={<MyCareer />} />
          <Route
            path="*"
            element={<h1 className="p-4 m-4">Page not found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
