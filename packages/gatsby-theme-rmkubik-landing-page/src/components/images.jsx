import React from 'react';
import fireEmoji from '../../assets/images/fire-emoji.png';
import titleScreenGif from '../../assets/images/wildire-worldmap-idle.gif';

const images = {
  fireEmoji,
  titleScreenGif,
};

const Image = ({ src, alt }) => <img src={images[src]} alt={alt} />;

export default Image;
