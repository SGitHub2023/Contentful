import SocialIconNav from "../SocialIconNav";
import { Icon } from "@iconify/react";

function Footer({ props }) {
  const { title, subTitle, sectionText1, sectionText2, linkedContent } = props;

  const socialMediaProfiles = linkedContent.filter(
    (entry) => entry.fields.slug === "socialmedia"
  )[0];
  const email = linkedContent[1].fields.eMail;

  return (
    <footer className='bg-teal-900 py-16'>
      <div className='container mx-auto flex flex-col place-items-start '>
        <h1 className='text-xl font-bold text-white mb-6'>{title}</h1>
        <p className='text-stone-300 text-sm font-light mb-6  w-1/3'>
          {sectionText1}
        </p>
        <div className='container mx-auto flex flex-row place-items-center mb-6'>
          <Icon
            icon='ic:outline-email'
            width='1rem'
            height='1rem'
            className='text-stone-300 text-sm font-thin mr-1'
          />
          <span className='text-stone-300 text-sm font-this'>{email} </span>
        </div>
        <SocialIconNav socialMediaProfiles={socialMediaProfiles} />
        <p className='text-stone-300 text-sm font-light mt-6'>{sectionText2}</p>
      </div>
    </footer>
  );
}

export default Footer;
