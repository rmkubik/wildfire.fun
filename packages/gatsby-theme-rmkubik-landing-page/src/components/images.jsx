import React from 'react';
import fireEmoji from '../../assets/images/wildfire-fire_magnify.png';
import titleScreenGif from '../../assets/images/wildire-worldmap-idle.2019-10-03 21_33_13.gif';
import trickyGif from '../../assets/images/wildfire-success-modal.gif';
import world1LevelNamesGif from '../../assets/images/wildfire-worldmap.gif';
import windyRoundaboutGif from '../../assets/images/windy-roundabout-fail.2019-08-19 09_56_12.gif';
import tallGrassGif from '../../assets/images/wildfire-locked-tile.gif';
import titleWithByline from '../../assets/images/wildfire-title-with-byline.png';
import titleWithLogo from '../../assets/images/wildfire-title-with-logo-trimmed.png';
import title from '../../assets/images/wildfire-title-trimmed.png';
import onlyYouCanPlay from '../../assets/images/only-you-can-play.png';
import world1 from '../../assets/images/world1-still.png';
import world2 from '../../assets/images/tall-grass-ash-world2.png';
import world3 from '../../assets/images/image-windy-world3.png';
import sixAward from '../../assets/images/six_award_2019.png';
import titleScreen from '../../assets/images/wildfire-title-with-background.png';
import titleWithBylineWhite from '../../assets/images/wildfire-title-with-byline-white.png';
import titleWhite from '../../assets/images/wildfire-title-white.png';

const images = {
  onlyYouCanPlay,
  trickyGif,
  fireEmoji,
  titleScreenGif,
  world1LevelNamesGif,
  windyRoundaboutGif,
  tallGrassGif,
  titleWithByline,
  title,
  world1,
  world2,
  world3,
  sixAward,
  titleScreen,
  titleWithBylineWhite,
  titleWhite,
  titleWithLogo,
};

const Image = ({ src, alt }) => <img src={images[src]} alt={alt} />;

export default Image;
