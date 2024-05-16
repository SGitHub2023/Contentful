import { Icon } from "@iconify/react";

function Experience({ experience }) {
  const experienceItems = experience.fields.json.data.map((item) => {
    return {
      name: Object.values(item)[0][0],
      icon: Object.values(item)[0][1],
    };
  });

  return (
    <ul className='flex gap-10 drop-shadow-xl'>
      {experienceItems.map((item, i) => (
        <li key={i} className={item.class}>
          <Icon
            icon={item.icon}
            className='text-4xl text-stone-300 hover:text-black mb-6 drop-shadow-xl'
          />
          <span className='sr-only '>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Experience;
