import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProject } from "../../utilities/contentfulClient";
import RichtextContent from "../helper/RichtextContent";

function Project() {
  const [project, setProject] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  let rtCnt1, rtCnt2, rtCnt3, featuredImageUrl;

  useEffect(() => {
    setLoading(true);
    getProject(id)
      .then((result) => {
        console.log(result);
        setProject(result[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (!loading) {
    featuredImageUrl = project.featuredImage.fields.file.url;
    rtCnt1 =
      project.linkedContent &&
      project.linkedContent[0]?.fields.richtextPageContent;
    rtCnt2 =
      project.linkedContent &&
      project.linkedContent[1]?.fields.richtextPageContent;
    rtCnt3 =
      project.linkedContent &&
      project.linkedContent[2]?.fields.richtextPageContent;
  }

  const loadingTemplate = <p>Loading...</p>;

  const displayTemplate = (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/3 bg-teal-950 pr-6 sm:text-center">
        <div className="p-6">
          <h2 className="text-white text-lg font-bold mb-4">{project.title}</h2>
          <p className="text-white mb-4">Year: 2024</p>
          <h3 className="text-white font-bold mb-2">HTML Tutorial</h3>
          <p className="text-white mb-4">
            Welcome to the world of HTML! In this tutorial, you'll embark on an
            exciting journey to learn the foundational language of web
            development.
          </p>
          <hr className="border-white my-6" />
          <h3 className="text-white font-bold mb-2">Tutorial Outline</h3>
          <ul className="list-none text-white mb-4 pr-4">
            <li>Introduction to HTML</li>
            <li>Basic HTML Tags</li>
            <li>Structuring Web Pages</li>
            <li>Creating Links and Images</li>
            <li>HTML Forms</li>
            <li>HTML Tables</li>
            <li>Embedding Multimedia</li>
            <li>HTML5 Semantic Elements</li>
            <li>Best Practices and Tips</li>
          </ul>
          <hr className="border-white my-6" />
          <p className="text-white mb-4">
            <a
              href={project.projectLink}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </p>
          <p className="text-white mb-4">
            <a
              href={project.githubLink}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
      <div className="lg:w-2/3 bg-white p-6 flex justify-center items-center">
        <div>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={featuredImageUrl}
              alt={project.title}
              className="mb-4 mx-auto cursor-pointer"
            />
          </a>
          {rtCnt1 && <RichtextContent content={rtCnt1} />}
          {rtCnt2 && <RichtextContent content={rtCnt2} />}
          {rtCnt3 && <RichtextContent content={rtCnt3} />}
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {"<< "}Back
          </button>
        </div>
      </div>
    </div>
  );

  return <div>{loading ? loadingTemplate : displayTemplate}</div>;
}

export default Project;
