import Skills from "../Skills.jsx";
import SocialIconNav from "../SocialIconNav.jsx";
import ContactInfo from "../ContactInfo.jsx";
import MarkdownContent from "../helper/MarkdownContent.jsx";

function AboutMeSection({ props }) {

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
		<section className="about-me-section" id="about-me">
			<h1>{title}</h1>
			<p>{subTitle}</p>
			<MarkdownContent content={sectionText1}/>
			<a href={cvFile} target="_blank">{ctaButtonLabel}</a>
			<Skills skills={skills}/>
			<SocialIconNav socialMediaProfiles={socialMediaProfiles}/>
			<ContactInfo contactInfo={personalInfo}/>
		</section>
	);
}

export default AboutMeSection;
