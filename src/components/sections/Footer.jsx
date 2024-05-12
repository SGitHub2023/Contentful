function Footer({ props }) {

	//console.log(props);

	const {
		title,
		subTitle,
		sectionText1
	} = props;



  return (
		<>
			<h1>{title}</h1>
			<div>{subTitle}</div>
		</>
	);
}

export default Footer;
