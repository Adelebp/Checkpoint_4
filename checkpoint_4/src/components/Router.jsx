import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './A_propos';
import Cv from './Cv';

import Projets from './Projets';
import Contact from './Contact';
import Home from './Home';

export default function MyRouter() {
	return (
		<Router>
			
			<Switch>
				<Route path='/Accueil' component={Accueil} />
				<Route path='/A_propos' component={Apropos} />
				<Route path='/Cv' component={Cv} />
				<Route path='/Contact' component={Contact} />
				<Route path='/Projets' component={Projets} />
				<Route exact path='/' component={Home} />
			</Switch>
		</Router>
	);
}
