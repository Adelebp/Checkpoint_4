import React from 'react';
import { Nav,  NavLink } from 'reactstrap';
import styles from './Navbar.module.css';

const MyNavbar = (props) => {
	return (
		<div >
			<Nav className={styles.menu}>
				<NavLink href='./Accueil'>Accueil</NavLink>

				<NavLink href='./A_propos'>A_propos</NavLink>

				<NavLink href='./Cv'>Cv</NavLink>

				<NavLink href='./Projets'>Projets</NavLink>

				<NavLink href='./Contact'>Contact</NavLink>
			</Nav>
		</div>
	);
};

export default MyNavbar;
