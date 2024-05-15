function Skills({skills}) {

	const mySkills = skills.fields.json.data.map(item => {
		return {
			skill: Object.keys(item)[0],
			value: Object.values(item)[0]
		}
	});

	return (
		<div className="grid grid-cols-2 gap-2">
			{mySkills.map((item, i) => (
				<div key={i} className="bg-black/20 text-center p-2">
					<span className="block">{item.skill}</span>
					<span className="block">{item.value}</span>
				</div>
			))}
		</div>
	)
}

export default Skills;
