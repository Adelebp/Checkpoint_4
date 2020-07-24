import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import styles from './Cv.module.css';

const Cv = (props) => {
	const { buttonLabel } = props;
	const [show, setShow] = useState(false);

	const toggle = () => setShow(!show);

	return (
		<div>
			<h5 className={styles.h5}>Mon parcours</h5>

			<div className='p-3 my-2 rounded'>
				<Toast>
					<ToastHeader>Reactstrap</ToastHeader>
					<ToastBody>
						This is a toast on a white background — check it out!
					</ToastBody>
				</Toast>
			</div>
		</div>
	);
};

export default Cv;
