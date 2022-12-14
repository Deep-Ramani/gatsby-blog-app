module.exports = {
  siteMetadata: {
    title: `gatsby-blog-appp`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
      __key: 'images',
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
  ],
};
