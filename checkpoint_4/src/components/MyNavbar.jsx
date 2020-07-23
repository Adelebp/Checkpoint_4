import React from 'react';
import styles from './MyNavbar.module.css';
import {NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';


const MyNavbar = () => (
    <header className={styles.navbar}>
        <Link to="/Header" className={styles.navitem}>
            <NavLink>Accueil</NavLink>
            </Link>
            <Link to="/A_propos" className={styles.navitem}>
            <NavLink>A propos</NavLink>
            </Link>
            <Link to="/Cv" className={styles.navitem}>
            <NavLink>Cv</NavLink>
            </Link>
            <Link to="/Projets" className={styles.navitem}>
            <NavLink>Projets</NavLink>
            </Link>
    
    </header>
);

export default MyNavbar;