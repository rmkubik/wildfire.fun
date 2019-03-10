import React from 'react';
import Helmet from 'react-helmet';
import layoutStyles from './layout.module.scss';
import twitterTokens from '../tokens/twitter';
import '../theme/layout.scss';

// TODO: Pull site title fom a token or gatsby-config

export default ({ children }) => (
  <div className={layoutStyles.column}>
    <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: twitterTokens.card.description },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: twitterTokens.handle },
            { name: 'twitter:title', content: twitterTokens.card.title },
            { name: 'twitter:description', content: twitterTokens.card.description },
            { name: 'twitter:image:src', content: `${twitterTokens.siteUrl}${twitterTokens.card.image}` },
            { name: 'twitter:url', content: twitterTokens.siteUrl },
            { name: 'og:title', content: twitterTokens.card.title },
            { name: 'og:site_name', content: twitterTokens.card.title },
            { name: 'og:url', content: twitterTokens.siteUrl },
            { name: 'og:description', content: twitterTokens.card.description },
            { name: 'og:image', content: `${twitterTokens.siteUrl}${twitterTokens.card.image}` },
            { name: 'og:type', content: 'website' },
          ]}
          title={twitterTokens.card.title}
        />
    <main className={layoutStyles.layout}>{children}</main>
  </div>
);
