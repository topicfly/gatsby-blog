module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: `${__dirname}/static/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/images/`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 690,
						},
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (eg <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (eg for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers alongside the code.
							// To use it, add the following line in src/layouts/index.js
							// right after importing the prism color scheme:
							//  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
							// Defaults to false.
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false,
						},
					},
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-autolink-headers',
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'TODO',
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				// color: config.themeColor
			},
		},
		`gatsby-transformer-sharp`,
		'gatsby-plugin-sharp',
		'gatsby-plugin-catch-links',
		// "gatsby-plugin-sitemap",
		// {
		// resolve: "gatsby-plugin-manifest",
		//  options: {
		// name: config.siteTitle,
		// short_name: config.siteTitleShort,
		// description: config.siteDescription,
		// start_url: config.pathPrefix,
		// background_color: config.backgroundColor,
		// theme_color: config.themeColor,
		// display: "minimal-ui",
		// icons: [
		// {
		// src: "/logos/logo-192x192.png",
		// sizes: "192x192",
		// type: "image/png"
		// },
		// {
		// src: "/logos/logo-512x512.png",
		// sizes: "512x512",
		// type: "image/png"
		// }
		// ]
		// }
		// },
		// "gatsby-plugin-offline",
		`gatsby-plugin-postcss`,
	],
}
