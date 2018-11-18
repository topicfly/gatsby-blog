// @flow
import React from 'react'
import logo from './logo.svg'
import { Link } from 'gatsby'

export default () => (
	<div className="bg-grey-dark">
		<nav className="container w-full lg:w-3/5 flex items-center content-between mx-auto px-12">
			<div className="w-1/2">
				<Link to="/">
					<img className="h-12 w-12" src={logo} />
				</Link>
			</div>
			<div className="w-1/2 flex justify-end">
				<Link
					className="inline-block mr-3 capitalize text-bold text-white no-underline text-xl hover:text-grey-light"
					to="/about/"
				>
					about
				</Link>
			</div>
		</nav>
	</div>
)
