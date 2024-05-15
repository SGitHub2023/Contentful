import HTMLContent from "../helper/HTMLContent";

function HeroSection({ props }) {
	const {
		ctaButtonLabel,
		ctaButtonTarget,
		sectionText1,
		sectionText2,
		sectionTitle,
		sectionImage,
		subTitle,
		title
	} = props;

	const img = sectionImage.fields.file.url;

  return (
		<section className="hero-section" id="hero">
			<h1><HTMLContent content={title}/></h1>
			<div className="w-52 h-52 rounded-full overflow-hidden">
				<img src={img} alt="sdsds" />
			</div>
		</section>
	);

}

export default HeroSection;
