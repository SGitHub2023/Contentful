import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getContent } from "../../utilities/contentfulClient";
import ProjectCard from "../ProjectCard.jsx";

function ProjectsSection({ props }) {

	const [entries, setEntries] = useState([]);
	const [error, setError] = useState([]);
	const [loading, setLoading] = useState(true);

	const {
		title
	} = props;

	useEffect(() => {
		setLoading(true);
		getContent('project')
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

	const loadingTemplate = (
		<p>Loading...</p>
	);

	const displayTemplate = (
		<div className="grid gap-4 sm: gap-8 sm:grid-cols-2">
			{entries.map(entry => (
				<div key={entry.id}>
					<Link to={'/project/' + entry.slug}>
						<ProjectCard entry={entry} />
					</Link>
				</div>
			))}
		</div>
	);

	return (
		<section>
			<h1>{title}</h1>
			{loading ? loadingTemplate : displayTemplate}
		</section>
	);
}

export default ProjectsSection;
