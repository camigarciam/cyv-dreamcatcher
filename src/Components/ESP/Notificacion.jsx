import React, { useState, useEffect } from 'react';
import '../Info.css';

const Notificacion = ({ 
  message = "¡BREAKING NEWS! Handong sacó un nuevo album llamado AtsnstA镜界! No te lo pierdas.", 
  linkUrl = "https://open.spotify.com/album/6ELYGsthZFAnNkguZwCTST?si=lPC0p7AvQkezaZhFVuceTQ", 
  linkText = "Link a spotify",
  duration = 20000, // 10 segundos en milisegundos
  notificationId = "not_2"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const HOURS_24 = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
    
    // 1. Obtener último cierre
    const lastClosed = localStorage.getItem(`notification_${notificationId}_last_closed`);
    
    // 2. Si no existe o pasaron más de 24 horas, mostrar
    if (!lastClosed) {
      setIsVisible(true);
    } else {
      const lastTime = new Date(lastClosed).getTime();
      const currentTime = new Date().getTime();
      
      if (currentTime - lastTime >= HOURS_24) {
        setIsVisible(true);
      }
    }
    
    if (!isVisible) return;

    const totalTime = duration;
    const intervalTime = 50;
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

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, [isVisible, duration, notificationId]);

  const handleClose = () => {
    // Guardar timestamp actual
    localStorage.setItem(`notification_${notificationId}_last_closed`, new Date().toISOString());
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

export default Notificacion;