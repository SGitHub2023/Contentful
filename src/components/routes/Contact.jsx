import ContactForm from "../ContactForm";

function Contact({ props }) {

	const {
		title
	} = props;

  return (
    <div>
			{title}
      <ContactForm />
    </div>
  );
}

export default Contact;
