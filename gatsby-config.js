/* eslint-disable */
module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms-pages`,
        path: `${__dirname}/src/cms-pages`,
      },
    },
    {
      resolve: `babel-plugin-styled-components`,
      options: {
        ssr: true,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`nl`],
        defaultLanguage: `nl`,
        redirect: true,
      },
    },
  ],
};
