import "./App.css";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./pages/home/Home";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Home />
    </div>
  );
};

export default App;
