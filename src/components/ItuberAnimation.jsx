import React, { useState, useEffect } from 'react';
import './ItuberAnimation.css';

const ItuberAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('typing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationPhase('fade');
    }, 2000);

    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`ituber-animation ${animationPhase}`}>
      <div className="ituber-container">
        <div className="ituber-text">
          <span className="ituber-label">Sou</span>
          <span className="ituber-main">Ituber</span>
        </div>
        <div className="ituber-subtitle">
          Desenvolvedor Backend | Itaú Unibanco
        </div>
        <div className="ituber-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ItuberAnimation;
