import { useEffect, useState } from "react";
import AboutMeSection from "../components/AboutMeSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import { getContent } from "../utilities/contentfulClient";

function Home() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getContent("section")
      .then((result) => {
        console.log(result);
        setEntries(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  entries.map((entry) => {
    if (entry.title === "Contact") {
      console.log(entry);
    }
  });

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutMeSection />
    </>
  );
}

export default Home;
