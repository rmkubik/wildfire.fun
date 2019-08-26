import React from 'react';
import fireEmoji from '../../assets/images/wildfire-fire_magnify.png';
import titleScreenGif from '../../assets/images/wildire-worldmap-idle.gif';
import trickyGif from '../../assets/images/wildfire-success-modal.gif';
import world1LevelNamesGif from '../../assets/images/wildfire-worldmap.gif';
import windyRoundaboutGif from '../../assets/images/windy-roundabout-fail.2019-08-19 09_56_12.gif';
import tallGrassGif from '../../assets/images/wildfire-locked-tile.gif';
import titleWithByline from '../../assets/images/wildfire-title-with-byline.png';
import title from '../../assets/images/titleAndLogo.png';

const images = {
  trickyGif,
  fireEmoji,
  titleScreenGif,
  world1LevelNamesGif,
  windyRoundaboutGif,
  tallGrassGif,
  titleWithByline,
  title,
};

const Image = ({ src, alt }) => <img src={images[src]} alt={alt} />;

export default Image;
