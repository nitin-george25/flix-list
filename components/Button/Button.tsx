import { NextComponentType, NextPage } from 'next';
import React from 'react';

interface Props {
	type: string;
	content: string;
}

interface StyleClass {
	[key: string]: string;
}

const Button: NextPage<Props> = ({ type, content }) => {
	const classSelector: StyleClass = {
		primary: 'bg-primary text-white border-primary',
		secondary: 'bg-white text-primary border-primary',
		cta: 'bg-secondary text-white border-secondary',
		'cta-secondary': 'bg-white text-primary border-0',
	};

	return (
		<button className={`${classSelector[type]} border-1 rounded-3xl px-4 py-1`}>
			{content}
		</button>
	);
};

export default Button;
