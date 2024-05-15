import { Icon } from '@iconify/react';

function Experience({ experience }) {

	const experienceItems = experience.fields.json.data.map(item => {
		return {
			name: Object.values(item)[0][0],
			icon: Object.values(item)[0][1]
		}
	});

	return (
		<ul className="flex gap-2">
			{experienceItems.map((item, i) => (
				<li key={i} className={item.class}>
					<Icon icon={item.icon} className="text-3xl text-red-600 hover:text-cyan-800"/>
					<span className="sr-only">{item.name}</span>
				</li>
			))}
		</ul>
	)
}

export default Experience;
