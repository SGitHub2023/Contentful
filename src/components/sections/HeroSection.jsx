function HeroSection({ props }) {
	const {
		ctaButtonLabel,
		ctaButtonTarget,
		sectionText1,
		sectionText2,
		sectionTitle,
		subTitle,
		title
	} = props;

  return (
		<section>
			<h1>{title}</h1>
		</section>
	);

}

export default HeroSection;
