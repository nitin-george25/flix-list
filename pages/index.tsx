import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import moment from 'moment';

import Navbar from '../components/Navbar/Navbar';
import Thumbnail from '../components/Thumbnail/Thumbnail';
import { MovieData } from '../types';
import styles from '../styles/Home.module.css';
import { processMovieData } from '../utils/processMovieData';
import { capitalize } from '../utils/capitalize';

interface Props {
	data: Array<MovieData>;
}

const Home: NextPage<Props> = ({ data }) => {
	useEffect(() => {
		console.log('data: ', data);
	});

	return (
		<div className={styles.container}>
			<Head>
				<title>FlixList</title>
				<meta
					name='description'
					content='Movie reviews spoken from the heart'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<div className='trending-zone mx-20 my-10 px-16 py-8 w-fit'>
				<h3 className='text-3xl mb-8'>Trending Now</h3>
				{data.slice(0, 1).map((movie: MovieData) => (
					<div className='movie-box rounded-xl flex px-12 py-8 gap-6 w-fit bg-beige'>
						<Thumbnail
							image={{ src: movie['poster_path'], alt: movie['title'] }}
						/>
						<section className='movie-info grid grid-flow-row grid-rows-3'>
							<h1 className='max-w-md text-5xl font-cursive'>
								{movie['title']}
							</h1>
							<p className='max-w-md'>{movie['overview']}</p>
							<dl className='movie-rating flex gap-8 self-end'>
								<div className='flex gap-2'>
									<dt className='font-medium'>Language</dt>
									<dl>{capitalize(`${movie['original_language']}`)}</dl>
								</div>
								<div className='flex gap-2'>
									<dt className='font-medium'>Release Date</dt>
									<dl>{moment(movie['release_date']).format('ll')}</dl>
								</div>
								<div className='flex gap-2'>
									<dt className='font-medium'>Rating</dt>
									<dl>{movie['vote_average']}</dl>
								</div>
							</dl>
						</section>
					</div>
				))}
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps<{
	data: MovieData[];
}> = async () => {
	let data: MovieData[] = [];

	const res = await axios
		.get(
			'https://api.themoviedb.org/3/trending/all/week?api_key=14f42019af4f87a6c1044e9f7c093828'
		)
		.then((res) => {
			data = res.data.results;
		})
		.catch((err) => console.log(err));

	return {
		props: {
			data: data,
		},
	};
};

export default Home;
