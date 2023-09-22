import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<></>} />
          <Route
            path="*"
            element={<h1 className="p-4 m-4">Page not found</h1>}
          />
          <Route path="/career" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
