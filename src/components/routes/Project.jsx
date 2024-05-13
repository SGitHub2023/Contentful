import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getProject } from "../../utilities/contentfulClient";
import RichtextContent from "../helper/RichtextContent";

function Project() {

	const [project, setProject] = useState([]);
	const [error, setError] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();

	let richTextContent1, richTextContent2;

	useEffect(() => {
		setLoading(true)
		getProject(id).then((result) => {
			setProject(result[0]);
			setLoading(false);
		})
	}, []);

	if(!loading) {
		richTextContent1 = project.linkedContent[0].fields.richtextPageContent;
		richTextContent2 = project.linkedContent[1].fields.richtextPageContent;
	}

	const loadingTemplate = (
		<p>Loading...</p>
	);

	const displayTemplate = (
		<>
			<h1>{project.title}</h1>
			<RichtextContent content={richTextContent1}/>
			<RichtextContent content={richTextContent2}/>
			<button onClick={() => navigate("/")}>{"<< "}Back</button>
		</>
	);

	return (
		<div>
			{loading ? loadingTemplate : displayTemplate}
		</div>
	)
}

export default Project;
