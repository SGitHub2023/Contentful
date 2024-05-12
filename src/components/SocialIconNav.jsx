function SocialIconNav({socialMediaProfiles}) {

	const socialMediaItems = socialMediaProfiles.fields.json.data.map(item => {
		return {
			class: Object.keys(item)[0],
			name: Object.values(item)[0][0],
			url:  Object.values(item)[0][1],
		}
	});

	return (
		<nav>
			<ul className="flex gap-2">
			{socialMediaItems.map((item, i) => (
				<li key={i} className={item.class}>
					<a href={item.url}>{item.name}</a>
				</li>
			))}
			</ul>
		</nav>
	)
}

export default SocialIconNav;
