/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: "/serviceacbandarlampung",
    siteMetadata: {
        title: `Jasa Service AC Terbaik di Bandar Lampung`,
        siteUrl: `https://www.serviceacbandarlampung.com`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
