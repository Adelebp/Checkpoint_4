import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Apropos from './A_propos';
import Cv from './Cv';
import MyNavbar from './MyNavbar';
import Projets from './Projets';

import Home from './Home';

export default function MyRouter() {
	return (
		<Router>
			<MyNavbar />
			<Switch>
				<Route path='/Header' component={Home} />
				<Route path='/A_propos' component={Apropos} />
				<Route path='/Cv' component={Cv} />

				<Route path='/Projets' component={Projets} />
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
}
