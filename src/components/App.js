import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogCards from "./HogCards";
import HogFilter from "./HogFilter"

function App() {
	//const [porkers, setPorkers] = useState(hogs);
	const [greaseFilter, setGreaseFilter] = useState(false);
	const [sortBy, setSortBy] = useState('name');

	function filterGreasedHogs(e) {
		setGreaseFilter(e.target.checked);
	}

	function sortHogs(e) {
		setSortBy(e.target.value);
	}

	const porkersToDisplay = hogs
		.filter(porker => (greaseFilter === false) ? true : (porker.greased === greaseFilter))
		.sort((hog1, hog2) => {
			if (sortBy === 'name') {
				return hog1.name.localeCompare(hog2.name);
			}
			else {
				return hog1.weight - hog2.weight;
			}
		})

	return (
		<div className="App">
			<Nav />
			<HogFilter 
				greaseFilter={greaseFilter} 
				filterGreasedHogs={filterGreasedHogs} 
				sortBy={sortBy} 
				sortHogs={sortHogs} 
			/>
			<HogCards hogs={porkersToDisplay}/>
		</div>
	);
}

export default App;
