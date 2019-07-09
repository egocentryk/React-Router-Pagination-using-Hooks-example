import React, { useState, useEffect } from 'react';

function Senator({ match }) {

	useEffect(() => {
		fetchSenator();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [senator, setSenator] = useState([]);

	const fetchSenator = async () => {
		const data = await fetch(`https://www.govtrack.us/api/v2/role?current=true&role_type=senator&person=${match.params.id}`);

		const senator = await data.json();

		console.log(senator.objects);

		setSenator(senator.objects);
	}

	return (
		<>
			{senator.map(item =>
				<h1 key={item.person.bioguideid}>{item.person.firstname} {item.person.lastname}</h1>
			)}
		</>
	);
}

export default Senator;
