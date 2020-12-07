module.exports = {
    siteMetadata: {
        title: `Daesung Kim`, 
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `note`,
                path: `${__dirname}/src/posts/notes`,
            }, 
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `seminar`,
                path: `${__dirname}/src/posts/seminar`,
            }, 
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `teaching`,
                path: `${__dirname}/src/posts/teaching`,
            }, 
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            }, 
        },
        `gatsby-plugin-emotion`,
        { 
            resolve: `gatsby-plugin-typography`, 
            options: { 
                pathToConfigModule: `src/utils/typography`, 
            }, 
        }, 
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            strict: `ignore`
                        }
                    }
                ],
            },
        },
    ], 
}
