import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/favicon.ico";

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { siteDesc, siteTitle, siteUrl, image } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta
        name="keywords"
        content="freelance, web developer, web designer, Hertford, Hertfordshire, Gatsby developer, based in UK, fast websites, page speed insights"
      />

      <meta name="og:image" itemprop="image" content={`${siteUrl}${image}`} />

      <meta name="og:title" content={siteTitle} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:description" content={siteDesc} />
      <meta name="og:locale" content="en_GB" />
      <meta name="og:type" content="website" />
      <meta name="og:image:type" content="image/png" />

      <meta name="twitter:card" content={`${siteUrl}${image}`} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      <meta
        name="google-site-verification"
        content="N5YrikWT_SdBsorkrfZQfs06ZisAVKkO2M7vgduARCc"
      />
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={favicon} />

      <link rel="canonical" href="https://www.bloxywebservices.co.uk/" />
    </Helmet>
  );
};

export default SEO;
