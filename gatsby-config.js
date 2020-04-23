module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Viljami Kuosmanen`,
    name: `Viljami Kuosmanen`,
    siteUrl: `https://anttiviljami.github.io/blog`,
    description: `A place to write things`,
    hero: {
      heading: `Viljami Kuosmanen`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/anttiviljami`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/anttiviljami`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        basePath: "/blog/",
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Viljami Kuosmanen`,
        short_name: `viljami.io`,
        start_url: `/blog/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
