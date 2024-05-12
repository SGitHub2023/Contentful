import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getProject } from "../../utilities/contentfulClient";

function Project() {

	const [project, setProject] = useState([]);
	const [error, setError] = useState([]);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true)
		getProject(id).then((result) => {
			//console.log(result);
			setProject(result[0]);
			setLoading(false);
		})
	}, []);

	const loadingTemplate = (
		<p>Loading...</p>
	);

	const displayTemplate = (
		<>
			<h1>{project.title}</h1>
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
