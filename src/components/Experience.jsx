function Experience({ experience }) {

	const myExperience = experience.fields.json.data.map(item => {
		return {
			insight: Object.keys(item)[0],
			value: Object.values(item)[0]
		}
	});

	return (
		<div className="flex gap-2">
			{myExperience.map((item, i) => (
				<div key={i} className="">
					<span className="block">{item.skill}</span>
					<span className="block">{item.value}</span>
				</div>
			))}
		</div>
	)
}

export default Experience;
