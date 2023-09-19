import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/navbar/NavigationBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      {/* <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer> */}
    </div>
  );
}

export default App;
