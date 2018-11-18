module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe'
          },
          // "gatsby-remark-prismjs",
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'TODO'
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // color: config.themeColor
      }
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
    `gatsby-plugin-emotion`
  ]

}