const path = require('path')
const PurgeCssPlugin = require(`purgecss-webpack-plugin`)
const purgeCssConfig = require('./purgecss.config')

exports.onCreateWebpackConfig = ({ actions, stage }) => {
	if (stage.includes(`develop`)) return

	// Add PurgeCSS in production
	// See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
	if (stage.includes(`build`)) {
		actions.setWebpackConfig({
			plugins: [ new PurgeCssPlugin(purgeCssConfig) ],
		})
	}
}

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const postTemplate = path.resolve(`src/templates/post.js`)

	return graphql(`
	{
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 1000
		) {
			edges {
				node {
					frontmatter {
						path
					}
				}
			}
		}
	}
	`).then((result) => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}
		const allPagesPromises = result.data.allMarkdownRemark.edges.map(({ node }) =>
			Promise.resolve(createPage({ path: node.frontmatter.path, component: postTemplate, context: {} }))
		)
		return Promise.all(allPagesPromises)
	})
}
