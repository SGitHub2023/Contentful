import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { useIsMobile } from "../../utilities/mobileCheck";

function Navbar() {

	const isMobile = useIsMobile(640);
	const smoothScroll = (el) => el.scrollIntoView({ behavior: 'smooth'});
	let [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isMobile) setIsOpen(false);
	}, [isMobile]);

	const toggleNav = () => {
		isOpen = !isOpen;
		setIsOpen(isOpen);
	}

	const closeNav = () => {
		setIsOpen(false);
	}

	const nav = (
		<ul>
			<li><Link to='/' onClick={closeNav}>Home</Link></li>
			<li><HashLink to='/#projects' scroll={smoothScroll} onClick={closeNav}>Projects</HashLink></li>
			<li><HashLink to='/#about-me' scroll={smoothScroll} onClick={closeNav}>About me</HashLink></li>
			<li><Link to='/contact' onClick={closeNav}>Contact</Link></li>
		</ul>
	);

  return (
		<section className="bg-teal-900">
			<div className="relative container mx-auto text-white px-0">
				<div className="relative z-10 flex items-center bg-teal-900 p-4">
					<button className="flex-1 sm:hidden" onClick={toggleNav}>
						<Icon icon="ion:menu-outline" className="text-3xl"/>
						<span className="sr-only">Toggle Menu</span>
					</button>
					{!isMobile && <nav className="desktop-nav">{nav}</nav>}
					<button className="flex gap-3 px-4 py-[0.3rem] items-center rounded-full border-white border-2 text-xs uppercase">
						<Icon icon="mdi:tray-download" className="text-lg"/><span>Download CV</span>
					</button>
				</div>
				{isMobile && <nav className={isOpen ? 'mobile-nav is-open' : 'mobile-nav'}>{nav}</nav>}
			</div>
		</section>
  );
}

export default Navbar;
