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

	let rtCnt1, rtCnt2, rtCnt3, featuredImageUrl;

	useEffect(() => {
		setLoading(true)
		getProject(id).then((result) => {
			console.log(result);
			setProject(result[0]);
			setLoading(false);
		}).catch((error) => {
			//console.error(error);
			setError(error)
			setLoading(false);
		});
	}, []);

	if(!loading) {

		featuredImageUrl = project.featuredImage.fields.file.url;
		rtCnt1 = (project.linkedContent[0]) ? project.linkedContent[0].fields.richtextPageContent : '';
		rtCnt2 = (project.linkedContent[1]) ? project.linkedContent[1].fields.richtextPageContent : '';
		rtCnt3 = (project.linkedContent[2]) ? project.linkedContent[1].fields.richtextPageContent : '';
	}

	const loadingTemplate = (
		<p>Loading...</p>
	);

	const displayTemplate = (
		<>
			<h1>{project.title}</h1>
			<img src={featuredImageUrl} alt={project.title} />
			{rtCnt1 && <RichtextContent content={rtCnt1}/>}
			{rtCnt2 && <RichtextContent content={rtCnt2}/>}
			{rtCnt3 && <RichtextContent content={rtCnt3}/>}
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
