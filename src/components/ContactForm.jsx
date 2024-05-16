// function ContactForm() {
//   return (
// 		<div className="bg-black/10">ContactForm</div>
// 	);
// }

// export default ContactForm;

function ContactForm({ jotFormUrl }) {
	return (
		<div className="grid grid-cols-2 gap-4">
			<div className="flex items-center justify-center p-4">
				<p>Text</p>
			</div>
			<div className="p-4">
				<iframe
					src={jotFormUrl}
					width="100%"
					height="1500"
					style={{ border: "none" }}
				></iframe>
			</div>
		</div>
	);
}

export default ContactForm;
