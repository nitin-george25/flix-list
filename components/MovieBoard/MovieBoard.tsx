import React, { FunctionComponent } from 'react';

import Thumbnail from '../Thumbnail/Thumbnail';
import { MovieData } from '../../types';
import { capitalize } from '../../utils/capitalize';
import moment from 'moment';

interface Props {
	movie: MovieData;
}

const MovieBoard: FunctionComponent<Props> = ({ movie }) => {
	return (
		<div className='movie-board rounded-xl flex px-12 py-8 gap-6 w-fit bg-beige'>
			<Thumbnail movie={movie} size='xl' />
			<section className='movie-info grid grid-flow-row grid-rows-3'>
				<h1 className='max-w-md text-5xl font-cursive'>{movie?.['title']}</h1>
				<p className='max-w-md'>{movie?.['overview']}</p>
				<dl className='movie-rating flex gap-8 self-end'>
					<div className='flex gap-2'>
						<dt className='font-medium'>Language</dt>
						<dl>{capitalize(`${movie?.['original_language']}`)}</dl>
					</div>
					<div className='flex gap-2'>
						<dt className='font-medium'>Release Date</dt>
						<dl>{moment(movie?.['release_date'])?.format('ll')}</dl>
					</div>
					<div className='flex gap-2'>
						<dt className='font-medium'>Rating</dt>
						<dl>{parseFloat(`${movie?.['vote_average']}`)?.toFixed(2)}</dl>
					</div>
				</dl>
			</section>
		</div>
	);
};

export default MovieBoard;
