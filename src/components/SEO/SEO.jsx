import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../../assets/images/favicon-32x32.png';

require('dotenv').config();

function SEO({ lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.author}`}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description
        }
      ]}
    >
      <link rel="icon" type="text/css" href={favicon} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  title: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default SEO;
