// @flow
import React from 'react'
import logo from './logo.svg'

export default () => (
	<div className="bg-grey-dark">
		<nav className="container flex items-center content-between mx-auto px-12">
			<div className="w-1/2">
				<img className="h-12 w-12" src={logo} />
			</div>
			<div className="w-1/2 flex justify-end">
				<a
					className="inline-block mr-3 capitalize text-bold text-white no-underline text-xl hover:text-grey-light"
					href="#"
				>
					about
				</a>
			</div>
		</nav>
	</div>
)
