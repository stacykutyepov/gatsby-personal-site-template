/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Stanislawa Karlinska`,
    author: `Stanislawa Karlinska`,
    firstName: `Stacy`,
    lastName: `K.`,
    description: `Stacy  personal site`,
    occupation: `Software Engineer`,
    keywords: [`Stanislawa`, `Karlinska`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Front-End Developer`,
      `Content Creator`,
      `Mentor`,
      `Open Source Contributor`,
    ],
    readingList: [
      {
        title: `CSS in Depth`,
        author: `by Keith J. Grant`,
        link: `https://www.goodreads.com/book/show/32171114-css-in-depth`,
      },
      {
        title: `Secrets of the JavaScript Ninja`,
        author: `by John Resig, Bear Bibeault`,
        link: `https://www.goodreads.com/book/show/4373732-secrets-of-the-javascript-ninja`,
      },
      {
        title: `TData Structures and Algorithms with JavaScript`,
        author: `by Michael McMillan`,
        link: `https://www.goodreads.com/book/show/18198883-data-structures-and-algorithms-with-javascript`,
      },
    ],
    showsList: [
      {
        title: `How I Built This with Guy Raz`,
        author: `From NPR`,
        link: `https://www.npr.org/podcasts/510313/how-i-built-this`,
      },
      {
        title: `Planet Money`,
        author: `From NPR`,
        link: `https://www.npr.org/podcasts/510289/planet-money`,
      },
      {
        title: `The Daily`,
        author: `New York Times`,
        link: `https://www.nytimes.com/column/the-daily`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stacy's Personal Site`,
        short_name: `Stacy K.`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
