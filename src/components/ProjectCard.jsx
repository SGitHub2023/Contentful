function ProjectCard({ entry }) {
  const featuredImageUrl = entry.featuredImage.fields.file.url;

  return (
    <div className='project-card rounded overflow-hidden'>
      <div className='aspect-video overflow-hidden'>
        <img src={featuredImageUrl} alt={entry.title} />
      </div>
      <div className='bg-zinc-800'>
        <p className='p-2 text-xs text-stone-300 text-start font-normal uppercase ml-4'>
          click here to visit
        </p>
        <h2 className='p-2 text-xl text-white text-start uppercase ml-4'>
          {entry.title}
        </h2>
      </div>
    </div>
  );
}

export default ProjectCard;
