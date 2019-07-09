import React, { useState, useEffect } from 'react';

import People from './components/People';
import Pagination from './components/Pagination';

import './App.css';

function Senators() {

	useEffect(() => {
		fetchSenators();
	}, []);

	const [senators, setSenators] 			= useState([]);
	const [loading, setLoading] 			= useState(false);
	const [currentPage, setCurrentPage] 	= useState(1);
	const [postsPerPage] 					= useState(10);

	const fetchSenators = async () => {
		setLoading(true);

		const data = await fetch(
			'https://www.govtrack.us/api/v2/role?current=true&role_type=senator'
		);

		const senators = await data.json();
		setSenators(senators.objects);
		
		setLoading(false);
	}

	const indexOfLastPost 	= currentPage * postsPerPage;
	const indexOfFirstPost 	= indexOfLastPost - postsPerPage;
	const currentPosts 		= senators.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<People senators={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={senators.length}
				paginate={paginate} />
		</>
	);
}

export default Senators;
