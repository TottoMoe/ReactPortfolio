import Header from "./components/Header";
import Navigation from "./components/Navigation3";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Project");

  function render() {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Project":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return;
    }
  }
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setCurrentPage("About");
        }}
      >
        switch
      </button>
      <button
        onClick={() => {
          setCurrentPage("Project");
        }}
      >
        switch
      </button> */}
      <Navigation setCurrentPage={setCurrentPage} />
      <Header />
      {render()}
      <Footer />
    </div>
  );
}

export default App;
