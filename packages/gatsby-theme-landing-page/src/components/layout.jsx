import React from 'react';
import layoutStyles from './layout.module.scss';
import './theme.scss';

export default ({ children }) => (
  <div className={layoutStyles.column}>
    <main className={layoutStyles.layout}>{children}</main>
  </div>
);
