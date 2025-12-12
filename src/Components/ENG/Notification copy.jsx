import React, { useState, useEffect } from 'react';
import '../Info.css';

const Notificationcop = ({ 
  message = "¡BREAKING NEWS! New single CHEQUERED FLAG is out! Check it below.", 
  linkUrl = "https://youtu.be/w-NSDqO5aXE?si=07JYCNFGIXpO7Kvf", 
  linkText = "Listen in Youtube",
  duration = 20000 // 10 segundos en milisegundos
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    const totalTime = duration;
    const intervalTime = 50; // Actualizar cada 50ms para una barra de progreso suave
    const decrement = (intervalTime / totalTime) * 100;
    
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress - decrement;
        if (newProgress <= 0) {
          clearInterval(timer);
          return 0;
        }
        return newProgress;
      });
    }, intervalTime);

    // Temporizador para ocultar la notificación
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Limpieza de temporizadores
    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleLinkClick = () => {
    window.open(linkUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="notification">
      <div className="notification-content">
        <div className="notification-header">
          <span className="notification-title">BREAKING NEWS</span>
          <button className="notification-close" onClick={handleClose}>×</button>
        </div>
        <p className="notification-message">{message}</p>
        <div className="notification-footer">
          <button className="notification-link-btn" onClick={handleLinkClick}>
            {linkText}
          </button>
          <span className="notification-timer">
            Dissapears in {Math.ceil(duration / 1000)}s
          </span>
        </div>
      </div>
      <div className="notification-progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Notificationcop