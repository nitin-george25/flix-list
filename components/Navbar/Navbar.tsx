import React from 'react';
import { NextPage } from 'next';
import Button from '../Button/Button';

interface Props {}

const Navbar: NextPage<Props> = () => {
	return (
		<nav className='navbar flex items-center justify-between p-6'>
			<h3 className='font-cursive text-4xl text-primary'>FlixList</h3>
			<ul className='nav-links flex items-center gap-14 font-extralight'>
				<li>Movies</li>
				<li>Series</li>
				<li>Documentaries</li>
			</ul>
			<ul className='user-actions flex items-center gap-2'>
				<li>
					<Button type='cta-secondary' content='Sign in' />
				</li>
				<li>
					<Button type='cta' content='Sign up' />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
