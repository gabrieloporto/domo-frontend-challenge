import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Technology from "./components/Technology";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Technology />
      <CaseStudies />
      <About />
    </>
  );
}

export default App;
