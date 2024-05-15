import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Icon } from '@iconify/react';
import useIsMobile from "../../utilities/mobileCheck.js";

function Navbar() {

	const isMobile = useIsMobile(576);

	const smoothScroll = (el) => {
		el.scrollIntoView({ behavior: 'smooth'});
	}

  return (
    <div className="container mx-auto max-w-[1200px]">

			<div className="flex items-center p-4">

				<button className="flex-1 sm:hidden">
					<Icon icon="ion:menu-outline" className="text-3xl"/>
					<span className="sr-only">Toggle Menu</span>
				</button>

				<nav className={isMobile ? 'main-nav mobile-nav' : 'main-nav desktop-nav'}>
					<ul className="flex gap-6">
						<li><Link to='/'>Home</Link></li>
						<li><HashLink to='/#projects' scroll={smoothScroll}>Projects</HashLink></li>
						<li><HashLink to='/#about-me' scroll={smoothScroll}>About me</HashLink></li>
						<li><Link to='/contact'>Contact</Link></li>
					</ul>
				</nav>

				<button className="flex gap-3 px-4 py-[0.3rem] items-center rounded-full border-white border-2 text-xs uppercase">
					<Icon icon="mdi:tray-download" className="text-lg"/><span>Download CV</span>
				</button>

			</div>

    </div>
  );
}

export default Navbar;
