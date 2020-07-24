import React from 'react';
import styles from './A_propos.module.css';
import { Row, Col } from 'reactstrap';

export default function Apropos() {
	return (
		<div className={styles.card}>
			<Row>
				<Col xs='12' md='12' lg='5' className={styles.pres}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
						tenetur nulla quia. Necessitatibus, tempora ab animi assumenda vel
						fugit non, eligendi repellat minima vitae quod dicta delectus
						officiis. Reprehenderit, officia. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Cupiditate, ipsam? Molestias
						cupiditate debitis, cum culpa omnis voluptate delectus eum mollitia
						odio soluta cumque eveniet porro iusto, consequatur, consectetur
						sequi iure? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Velit officia impedit et quas expedita quasi earum est optio rerum
						odit magnam odio, incidunt esse molestiae vel, eum quis tenetur
						cupiditate?
					</p>
				</Col>
			</Row>
			<Row className={styles.image}>
				<Col lg='6' md='12' >
					<img className={styles.div}
						href='https://placeholder.com'
						src='https://via.placeholder.com/150'
						alt='my_face'
					/>
					<img className={styles.div2}
						href='https://placeholder.com'
						src='https://via.placeholder.com/150'
						alt='my_face'
					/>
				</Col>
			</Row>
		</div>
	);
}
