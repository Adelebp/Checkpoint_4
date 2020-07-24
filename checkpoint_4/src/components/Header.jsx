import React from 'react';
import styles from './Header.module.css';

export default function Header() {
	return (
		<div className={styles.container}>
			<h3>Adèle Bobin-Parra </h3>

			<h4>Développeur web junior</h4>
			<div className={styles.image}>

			<img className={styles.div}
						href='https://placeholder.com'
						src='https://via.placeholder.com/50'
						alt='linkedin'
					/>
						<img className={styles.div2}
						href='https://placeholder.com'
						src='https://via.placeholder.com/50'
						alt='github'
					/>
</div>
			{/* <p>abobinparra@gmail.com  06.67.63.32.27  85 La Roche sur Yon</p> */}
		</div>
	);
}
