import React from 'react'
import { Link, graphql } from 'gatsby'
import NavBar from '../components/navbar'
import '../index.tailwind.css'
import './post.css'
import 'prismjs/themes/prism-okaidia.css'

import Helmet from 'react-helmet'

const Layout = ({ children }) => (
	<div className="container lg:w-3/5 flex flex-col items-center mx-auto px-3 lg:px-12 mt-12">{children}</div>
)

export default function Template({ data }) {
	const { markdownRemark: post } = data
	const meta = generateMeta(data)

	return (
		<div>
			<NavBar />
			<Layout>
				<Helmet title={`Topicfly - ${post.frontmatter.title}`} meta={meta} />
				<h1>{post.frontmatter.title}</h1>
				<div className="post-content w-full" dangerouslySetInnerHTML={{ __html: post.html }} />
			</Layout>
		</div>
	)
}

function generateMeta(data) {
	const { markdownRemark: post } = data
	const description = post.excerpt
	const title = post.frontmatter.title
	const author = post.frontmatter.author
	const date = post.frontmatter.date

	let meta = [
		{
			name: `description`,
			content: description,
		},
		{
			name: `og:description`,
			content: description,
		},
		{
			name: `og:title`,
			content: title,
		},
		{
			name: `og:type`,
			content: `article`,
		},
		{
			name: `article:author`,
			content: author,
		},
		{
			name: `author`,
			content: author,
		},
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:description`,
			content: description,
		},
		{
			name: `twitter:label1`,
			content: `Reading time`,
		},
		{
			name: `twitter:data1`,
			content: `${post.timeToRead} min read`,
		},
		{
			name: `article:published_time`,
			content: date,
		},
	]

	if (post.frontmatter.author_twitter) {
		meta.push({ name: 'twitter:author', content: post.frontmatter.author_twitter })
	}

	return meta
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			timeToRead
			excerpt(pruneLength: 250)
			frontmatter {
				title
				author
				path
				date(formatString: "YYYY-MM-DD")
				author_twitter
			}
		}
	}
`
