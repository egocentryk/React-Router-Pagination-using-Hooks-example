import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import About from './About';
import Senators from './Senators';
import Senator from './Senator';
import Nav from './components/Nav';

function App() {
  	return (
		<Router>
	    	<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/senators" component={Senators} />
					<Route path="/senator/:id" component={Senator} />
				</Switch>
	    	</div>
		</Router>
  	);
}

const Home = () => (
	<>
		<h1>Home Page</h1>
	</>
);

export default App;
