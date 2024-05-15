function ProjectCard({ entry }) {

	const featuredImageUrl = entry.featuredImage.fields.file.url;

  return (
		<div className="project-card rounded overflow-hidden">
			<div className="aspect-video overflow-hidden">
				<img src={featuredImageUrl} alt={entry.title} />
			</div>
			<div className="bg-black/10">
				<h2 className="p-2 text-xl">{entry.title}</h2>
			</div>
		</div>
	);
}

export default ProjectCard;
