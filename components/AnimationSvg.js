"use client";

import Lottie from 'lottie-react';
import Animation from '../public/Animation/LottieAnimation - 1746683087711.json';
import React, { useState, useEffect } from 'react';

const AnimationSvg = ({ backgroundColor = '#ffffff' }) => {
  return (
    <div style={{ backgroundColor, display: 'inline-block', width: '20px', height: '20px' }}>
      <Lottie
        animationData={Animation}
        loop={true}
        autoplay={true}
        style={{ 
          width: '20px', 
          height: '20px',
          verticalAlign: 'middle' // Align with the button
        }}
      />
    </div>
  );
};

export default AnimationSvg;