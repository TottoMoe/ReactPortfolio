import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

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
      <Header />
      <Navigation setCurrentPage={setCurrentPage} />
      {render()}
      <Footer />
    </div>
  );
}

export default App;
