import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { ImageData } from '../../types';

interface Props {
	image: ImageData;
}

const Thumbnail: NextPage<Props> = ({ image }) => {
	const { src, alt, size, orientation } = image;

	return (
		<div className='thumbnail rounded-xl w-fit'>
			<Image
				className='rounded-xl'
				src={`https://image.tmdb.org/t/p/w500${src}`}
				alt={alt}
				height={600}
				width={250}
			/>
		</div>
	);
};

export default Thumbnail;
