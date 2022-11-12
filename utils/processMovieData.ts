import { MovieData } from '../types';

export const processMovieData = (movieData: MovieData[]) => {
	let refinedData: MovieData[] = [];

	movieData.map((movie) => {
		let refinedMovie: MovieData = {
			title: '',
			genre_ids: [],
			poster_path: '',
			original_language: '',
			overview: '',
			release_date: '',
			popularity: 0,
		};

		for (let key in movie) {
			if (Object.keys(refinedMovie).includes(key)) {
				refinedMovie[key] = movie[key];
			}
		}

		refinedData.push(refinedMovie);
	});

	console.log('changed data', refinedData);

	return refinedData;
};
