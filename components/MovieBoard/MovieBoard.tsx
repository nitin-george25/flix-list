import React, { FunctionComponent } from 'react';

import Thumbnail from '../Thumbnail/Thumbnail';
import { ImageData } from '../../types';

interface Props {
	image: ImageData;
}

const MovieBoard: FunctionComponent<Props> = ({ image }) => {
	return (
		<div className='movie-board flex gap-2 p-4'>
			<Thumbnail image={image} />
		</div>
	);
};

export default MovieBoard;
