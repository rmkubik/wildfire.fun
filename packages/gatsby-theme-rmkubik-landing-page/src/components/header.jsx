import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = ({ title, links }) => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>{title}</h1>
      {links.map(({ label, link, external }) =>
        external ? <a href={link}>{label}</a> : <Link to={link}>{label}</Link>,
      )}
    </header>
  );
};

export default Header;
