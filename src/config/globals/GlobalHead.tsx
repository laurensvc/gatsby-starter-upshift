import React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from '../../assets/branding/favicon.png';

const GlobalHead = () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta
      name="description"
      content="Websites inclusief SEO, advertenties, e-mail en meer. Uw concurrentie voorbij door een op maat gemaakt online totaalpakket."
    />
    <meta name="subject" content="upshift | Digitaal in een hogere versnelling" />
    <title>upshift | Digitaal in een hogere versnelling</title>
    <meta name="keywords" content="Webdesign, websites, website laten maken, SEO, e-mail, IT, consultancy, netwerken" />
    <meta name="author" content="upshift" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index,follow" />
    <meta property="og:url" content="https://upshift.be" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="upshift" />
    <meta property="og:description" content="upshift | Schakel uw online strategie in een hogere versnelling" />
    <meta property="og:locale" content="nl_BE" />
    <meta property="article:author" content="upshift" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="https://upshift.be" />
    <meta name="twitter:title" content="upshift" />
    <meta name="twitter:description" content="upshift | Schakel uw online strategie in een hogere versnelling" />
    <html lang="nl" />
    <link rel="shortcut icon" href={Favicon} type="image/jpg" />
    <link rel="icon" href={Favicon} type="image/jpg" />

    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;752;800;900&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
);

export default GlobalHead;
