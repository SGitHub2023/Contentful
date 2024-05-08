import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
