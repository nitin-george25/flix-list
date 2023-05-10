import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { ImageData, MovieData } from '../../types';

interface Props {
	movie: MovieData;
	size: string;
	className?: string;
	onClick?: Function;
}

interface SizeChart {
	[key: string]: ImageSize;
}

type ImageSize = {
	height: number;
	width: number;
};

const Thumbnail: NextPage<Props> = ({
	movie,
	size,
	className,
	onClick = () => {},
}) => {
	const chart: SizeChart = {
		xs: { height: 210, width: 70 },
		sm: { height: 300, width: 100 },
		md: { height: 450, width: 150 },
		lg: { height: 600, width: 200 },
		xl: { height: 840, width: 280 },
	};

	return (
		<div
			className='thumbnail rounded-xl w-fit h-fit'
			onClick={() => onClick(movie)}
		>
			<Image
				className={`rounded-xl ${className}`}
				src={`https://image.tmdb.org/t/p/w500${movie?.['poster_path']}`}
				alt={movie?.['title']}
				height={size ? chart[size].height : 300}
				width={size ? chart[size].width : 150}
			/>
		</div>
	);
};

export default Thumbnail;
