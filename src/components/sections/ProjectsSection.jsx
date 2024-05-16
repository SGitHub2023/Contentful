import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getContent } from "../../utilities/contentfulClient";
import ProjectCard from "../ProjectCard.jsx";
import Experience from "../Experience.jsx";

function ProjectsSection({ props }) {
  const { title, subTitle, linkedContent } = props;

  const experience = linkedContent.filter(
    (entry) => entry.fields.slug === "experience"
  )[0];

  const [entries, setEntries] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getContent("project")
      .then((result) => {
        //console.log(result);
        setEntries(result);
        setLoading(false);
      })
      .catch((error) => {
        //console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const loadingTemplate = <p>Loading...</p>;

  const displayTemplate = (
    <>
      <div className='grid gap-4 sm:gap-8 sm:grid-cols-2'>
        {entries.map((entry) => (
          <div key={entry.id}>
            <Link to={"/project/" + entry.slug}>
              <ProjectCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className='bg-teal-900 px-4 py-8'>
      <div className='container mx-auto flex flex-col place-items-center text-center'>
        {/* Experience With Schriftzug */}
        <p className='text-gray-400 uppercase font-semibold text-xl drop-shadow-lg mb-4'>
          {subTitle}
        </p>
        <Experience experience={experience} />
        <h1 className='text-white text-2xl uppercase font-bold mb-2'>
          {title}
        </h1>
        {loading ? loadingTemplate : displayTemplate}
      </div>
    </section>
  );
}

export default ProjectsSection;
