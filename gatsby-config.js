/* eslint-disable */
module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetaData: true,
        defaultQuality: 81,
        maxWidth: 1500,
      },
    },
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`nl`],
        defaultLanguage: `nl`,
        redirect: true,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/branding/favicon.png',
        dir: 'auto',
        lang: 'nl-BE',
        background: 'rgb(33,37,40)',
        theme_color: 'rgb(33,37,40)',
        display: 'standalone',
        orientation: 'any',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          yandex: true,
          windows: true,
        },
      },
    },
  ],
};
