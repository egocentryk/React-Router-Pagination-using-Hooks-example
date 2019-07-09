import React from 'react';
import loader from '../images/loading.gif';
import { Link } from 'react-router-dom';

const People = ({ senators, loading }) => {

	if(loading) {
		return <h2><img src={loader} alt="Loading" /></h2>
	}

	return (
		<>
			<ul id="senatorsList">
				{senators.map(senator => (
					<li key={senator.person.bioguideid}>
						<Link to={`/senator/${senator.person.link.substr(senator.person.link.length-6)}`}>
							{senator.person.firstname} {senator.person.lastname}
						</Link>
						<span>{senator.description}</span>
					</li>
				))}
			</ul>
		</>
	)
}

export default People;
