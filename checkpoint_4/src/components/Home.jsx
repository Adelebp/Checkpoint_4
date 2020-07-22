import React from 'react';
import Accueil from './Accueil';
import Apropos from './A_propos';
import Cv from './Cv';
import Projets from './Projets';
import Contact from './Contact';
function Home() {
	
	return (
		<div>
			<Accueil />
			<Apropos />
			<Cv />
			<Projets />
			<Contact />
		</div>
		
	);
};
export default Home;
