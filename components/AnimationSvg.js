"use client"

import React from 'react';
import Lottie from 'lottie-react';
import Animation from '../public/Animation/LottieAnimation - 1746683087711.json';

 const AnimationSvg = () => {
  return (
    <Lottie
      animationData={Animation}  // Use animationData prop instead of src
      loop={true}
      autoplay={true}
      style={{ width: '18px', height: '18px', }}
    />
  );
};

export default AnimationSvg;