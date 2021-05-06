module.exports = {
    siteMetadata: {
        title: 'gatsby-starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/assets`,
            },
        },
        {
            // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter`,
                short_name: `Starter`,
                start_url: `/`,
                background_color: `#181618`,
                theme_color: `#99CCED`,
                display: `standalone`,
                icon: `./assets/logo.svg`,
            },
        },
    ],
}
