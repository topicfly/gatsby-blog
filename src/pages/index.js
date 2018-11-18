import React from 'react'
import { Link, graphql } from 'gatsby'
import NavBar from '../components/navbar'
import PostCard from '../components/PostCard'
import '../index.tailwind.css'

const Layout = ({ children }) => (
	<div className="container lg:w-3/5 flex flex-col items-center mx-auto px-3 lg:px-12 mt-12">{children}</div>
)

export default ({ data }) => {
	const { edges: posts } = data.allMarkdownRemark
	return (
		<div>
			<NavBar />
			<Layout>
				{posts
					.filter((post) => post.node.frontmatter.title.length > 0)
					.map(({ node: post }) => <PostCard key={post.id} {...post} />)}
			</Layout>
		</div>
	)
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					timeToRead
					frontmatter {
						title
						author
						date(formatString: "YYYY-MM-DD")
						path
					}
				}
			}
		}
	}
`
