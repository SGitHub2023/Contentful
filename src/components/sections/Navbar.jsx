import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {

	const smoothScroll = (el) => {
		el.scrollIntoView({ behavior: 'smooth'});
	}

  return (
    <div className="container mx-auto bg-teal-900">
			<nav>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><HashLink to='/#projects' scroll={smoothScroll}>Projects</HashLink></li>
					<li><HashLink to='/#about-me' scroll={smoothScroll}>About me</HashLink></li>
					<li><Link to='/contact'>Contact</Link></li>
				</ul>
			</nav>
    </div>
  );
}

export default Navbar;
