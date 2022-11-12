export type ImageData = {
	src: string;
	alt: string;
	size?: string;
	orientation?: string;
};

export type MovieData = {
	[key: string]: string | number | number[];
	title: string;
	genre_ids: number[];
	poster_path: string;
	original_language: string;
	overview: string;
	release_date: string;
	popularity: number;
};
