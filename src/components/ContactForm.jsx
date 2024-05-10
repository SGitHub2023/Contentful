// function ContactForm() {
//   return <div>ContactForm</div>;
// }

// export default ContactForm;

import React, { useEffect } from "react";

function ContactForm() {
	useEffect(() => {
		// JotForm-Skript laden
		const loadJotFormScript = () => {
			const script = document.createElement("script");
			script.src =
				"https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
			script.onload = () => {
				window.jotformEmbedHandler(
					"iframe[id='JotFormIFrame-241300884867058']",
					"https://form.jotform.com/"
				);
			};
			document.body.appendChild(script);
		};

		// Skript laden, wenn die Komponente gemountet wird
		loadJotFormScript();

		// Aufräumen, wenn die Komponente unmountet wird
		return () => {
			// Entferne das Skript, wenn es vorhanden ist
			const script = document.querySelector(
				"script[src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js']"
			);
			if (script) {
				document.body.removeChild(script);
			}
		};
	}, []);

	return (
		<div>
			<iframe
				id="JotFormIFrame-241300884867058"
				title="Formular"
				onLoad={() => window.parent.scrollTo(0, 0)}
				allowTransparency="true"
				allow="geolocation; microphone; camera; fullscreen"
				src="https://form.jotform.com/241300884867058"
				style={{
					minWidth: "100%",
					maxWidth: "100%",
					height: "539px",
					border: "none",
				}}
			/>
		</div>
	);
}

export default ContactForm;
