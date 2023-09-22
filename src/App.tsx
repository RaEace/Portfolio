import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./pages/home/Home";
import MyCareer from "./pages/my-career/MyCareer";
import AboutMe from "./pages/about-me/AboutMe";

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
