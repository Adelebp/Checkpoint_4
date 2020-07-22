
import styles from './Accueil.module.css';

import React, { useState } from 'react';
import {
	
	Navbar,

	NavLink,
} from 'reactstrap';

const Accueil = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className={styles.container}>
			<Navbar fixed className={styles.Nav} color='light' light expand='md'>
				
					<NavLink href='/Accueil'>Accueil</NavLink>
					<NavLink href='/A_propos'>A propos</NavLink>

					<NavLink href='/Cv'>Cv</NavLink>

					<NavLink href='/Projets'>Projets</NavLink>

					<NavLink href='/Contact'>Contact</NavLink>
				
			</Navbar>

			{/* <img className={styles.bg} src={fond} alt='img' /> */}

			<h3>Adèle Bobin-Parra </h3>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quo
				repellendus architecto aliquam eaque temporibus veniam, tenetur
				doloremque ullam optio hic. Pariatur ullam maxime eaque necessitatibus
				facilis accusamus adipisci beatae.
			</p>
			
		</div>
	);
};

export default Accueil;
