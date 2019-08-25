import React from 'react';
import sectionListStyles from './sectionList.module.scss';

const SectionList = ({ links }) => {
  return (
    <div className={sectionListStyles.header}>
      {links.map(({ label, link }) => (
        <a href={link}>{label}</a>
      ))}
    </div>
  );
};

export default SectionList;
