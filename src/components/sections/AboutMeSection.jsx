import Skills from "../Skills.jsx";
import SocialIconNav from "../SocialIconNav.jsx";
import ContactInfo from "../ContactInfo.jsx";

function AboutMeSection({ props }) {

	console.log(props);


	const {
		ctaButtonLabel,
		sectionText1,
		subTitle,
		title,
		linkedContent
	} = props;

	const skills = linkedContent.filter(entry => entry.fields.slug === "skills")[0];
	const socialMediaProfiles = linkedContent.filter(entry => entry.fields.slug === "socialmedia")[0];
	const personalInfo = linkedContent.filter(entry => entry.fields.slug === "personal-info")[0];
	const cvFile = personalInfo.fields.cv.fields.file.url;

	return (
		<section>
			<h1>{title}</h1>
			<p>{subTitle}</p>
			<p>{sectionText1}</p>
			<a href={cvFile} target="_blank">{ctaButtonLabel}</a>
			<Skills skills={skills}/>
			<SocialIconNav socialMediaProfiles={socialMediaProfiles}/>
			<ContactInfo contactInfo={personalInfo}/>
		</section>
	);
}

export default AboutMeSection;
