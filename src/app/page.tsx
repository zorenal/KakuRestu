import Home from "./components/AppHome";
import HrsnLoc from "./components/HrsLoc";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/JPGAbout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Main() {
  return (
    <div>
      <Home />
      <HrsnLoc />
      <Menu />
      <Gallery/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
