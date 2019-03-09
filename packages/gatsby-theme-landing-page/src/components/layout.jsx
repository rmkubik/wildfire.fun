import React from 'react';
import Helmet from 'react-helmet';
import layoutStyles from './layout.module.scss';
import twitterTokens from '../tokens/twitter';
import '../theme/layout.scss';

export default ({ children }) => (
  <div className={layoutStyles.column}>
    <Helmet>
      <title>Wildfire</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterTokens.handle} />
      <meta
        name="twitter:title"
        content={twitterTokens.card.title}
      />
      <meta name="twitter:description" content={twitterTokens.card.description} />
      <meta
        name="twitter:image"
        content={twitterTokens.card.image}
      />
    </Helmet>
    <main className={layoutStyles.layout}>{children}</main>
  </div>
);
