import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const query = graphql`
  {
    site {
      pathPrefix
      siteMetadata {
        siteTitle: title
        titleTemplate
        siteDescription: description
        siteUrl
        siteImage: image
        twitterUsername
      }
    }
  }
`;
const Seo = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    siteTitle,
    titleTemplate,
    siteDescription,
    siteUrl,
    siteImage,
    twitterUsername,
  } = site.siteMetadata;

  const pathPrefix = site.pathPrefix;

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    url: `${siteUrl}${pathname.replace(pathPrefix, '')}`,
    image: `${siteUrl}${image || siteImage}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <link rel="icon" href={`${siteUrl}/favicon.ico`} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
};
