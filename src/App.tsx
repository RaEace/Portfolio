import "./App.css";
import NavigationBar from "./components/navbar/NavigationBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Home />
      {/* <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer> */}
    </div>
  );
}

export default App;
