import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getContent } from "./utilities/contentfulClient";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";

import Home from "./components/routes/Home";
import Contact from "./components/routes/Contact";
import Project from "./components/routes/Project";

function App() {

	const [entries, setEntries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState([]);

	useEffect(() => {
		setLoading(true);

		getContent("section")
			.then((result) => {
				//console.log(result);
				setEntries(result);
				setLoading(false);
			})
			.catch((error) => {
				//console.error(error);
				setError(error)
				setLoading(false);
			});
	}, []);


  return (
    <>
      <header className="h-12 sm:h-16">
				{!loading &&
					<Navbar props={entries.filter(entry => entry.slug === "footer-section")[0]} />
				}
      </header>

      <main>
				{!loading && (
					<Routes>
						<Route path='/' element={<Home sections={entries} />}/>
						<Route path='/contact' element={<Contact props={entries.filter(entry => entry.slug === "contact-section")[0]}/>}/>
						<Route path="/project/:id" element={<Project/>}/>
					</Routes>
				)}
      </main>

      <footer>
				{!loading && (
        	<Footer props={entries.filter(entry => entry.slug === "footer-section")[0]} />
				)}
      </footer>

    </>
  );
}

export default App;
