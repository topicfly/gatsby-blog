import React from 'react'
import { Link } from 'gatsby'

export default ({ excerpt, timeToRead, frontmatter: { title, author, date, urlSlug } }) => {
	return (
		<article>
			<Link to={urlSlug} className="no-underline text-black">
				<h2 className="text-md w-full text-center mb-2">Classify MNIST handwritten digits with Keras</h2>
			</Link>
			<p className="text-sm text-center mb-3">
				<span className="inline-block text-sm mr-2">Posted on: {date}</span>|
				<span className="inline-block mx-2">Author: {author}</span>|
				<span className="inline-block ml-2">Read time: {timeToRead} minutes</span>
			</p>
			<p className="text-sm text-justify">{excerpt}</p>
		</article>
	)
}
