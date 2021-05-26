import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EntriesSkelleton from './EntriesSkelleton';

// Check how to get last url segment for blog

import { blogEntries } from '../../../constants/blogEntries';

const Blog = () => {
	const [loadingState, setLoadingState] = useState(true);
	const [ entriesState, setEntriesState ] = useState([...Array(18)].map((x) => ({}) ));

	useEffect(() => {
		setEntriesState(blogEntries);
		setLoadingState(false);
	}, []);

	return (
		<section>
			<Container maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid item xs>
						<h2>Blog</h2>
					</Grid>
					<EntriesSkelleton blogEntries={entriesState} isLoading={loadingState} />
				</Grid>
			</Container>
		</section>
	);
};

export default Blog;
