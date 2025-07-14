import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* <!-- dark mode toggler --> */}
      <input id="darkMode" type="checkbox" />

      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- navbar --> */}
        <Navbar />

        {/* <!-- hero section --> */}
        <Hero />

        {/* <!-- skills section --> */}
        <Skills />

        {/* <!-- projects section --> */}
        <Projects />

        {/* <!-- about me section --> */}
        <About />

        {/* <!-- contact section --> */}
        <Contact />

        {/* <!-- footer section --> */}
        <Footer />
      </div>
      {/* <!-- fontawesome scripts --> */}
    </>
  );
}

export default App;
