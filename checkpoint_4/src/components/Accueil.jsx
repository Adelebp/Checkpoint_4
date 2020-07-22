import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import styles from './Accueil.module.css';

import MyNavbar from './Navbar';
import { Nav, NavLink, Navbar } from 'reactstrap';

const fond = require('./fond.jpg');
export default function Accueil() {
	return (
		<div>
			

			<Nav className={styles.menu}>
				<NavLink href='./Accueil'>Accueil</NavLink>

				<NavLink href='./A_propos'>A_propos</NavLink>

				<NavLink href='./Cv'>Cv</NavLink>

				<NavLink href='./Projets'>Projets</NavLink>

				<NavLink href='./Contact'>Contact</NavLink>
			</Nav>
            <img className={styles.bg} src={fond} alt='img' />

			<h3>Adèle Bobin-Parra </h3>
			<p>TEXTE</p>
		</div>
	);
}
