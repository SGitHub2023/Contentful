import { Icon } from '@iconify/react';
import ContactForm from "../ContactForm";

function Contact({ props }) {

	const { title, linkedContent } = props;
	const personalInfo = linkedContent[0].fields;

  return (
    <div>
			<h2>{title}</h2>
			<Icon icon="ion:mail-outline" className="text-2xl"/> {personalInfo.eMail}
			<Icon icon="ion:phone-portrait-outline" className="text-2xl"/> {personalInfo.phone}
			<Icon icon="ion:location-outline" className="text-2xl"/> {personalInfo.address}, {personalInfo.zipCode} {personalInfo.city}
      <ContactForm />
    </div>
  );
}

export default Contact;
