/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: "/serviceacbandarlampung",
    siteMetadata: {
        title: `Jasa Service AC Terbaik di Bandar Lampung`,
        description: `Temukan layanan profesional perawatan dan servis AC terbaik di Bandar Lampung. Tim ahli kami siap memberikan solusi cepat dan efisien untuk segala masalah AC Anda. Hubungi kami sekarang untuk pengalaman ber-AC yang nyaman dan sejuk sepanjang tahun!`,
        siteUrl: `https://www.serviceacbandarlampung.id`,
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
