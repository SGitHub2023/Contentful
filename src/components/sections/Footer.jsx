import SocialIconNav from "../SocialIconNav";

function Footer({ props }) {

	const {
		title,
		subTitle,
		sectionText1,
		linkedContent
	} = props;

	const socialMediaProfiles = linkedContent.filter(entry => entry.fields.slug === "socialmedia")[0];

  return (
		<>
			<h1>{title}</h1>
			<div>{subTitle}</div>
			<SocialIconNav socialMediaProfiles={socialMediaProfiles}/>
		</>
	);
}

export default Footer;
