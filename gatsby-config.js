module.exports = {
  siteMetadata: {
    title: 'The Daily Pennsylvanian',
    description: 'new website for the Daily Pennsylvanian',
    author: '@theDP Web Department 2020',
    siteUrl: `https://dailypenn.github.io/`
  },
  pathPrefix: '/thedp.com',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/DP-500.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/,
        },
      },
    },
  ],
}
