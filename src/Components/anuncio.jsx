import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Esto es necesario para accesibilidad

const FirstTimeAnnouncement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement');
    
    if (!hasSeenAnnouncement) {
      setShowAnnouncement(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenAnnouncement', 'true');
    setShowAnnouncement(false);
  };

  return (
    <Modal
      isOpen={showAnnouncement}
      onRequestClose={handleClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>Somnia!</h2>
      <p>Te contamos que hay de nuevo en la guia:</p>
            <p>
                <ul>
                    <li>Agregado de la reimpresión de Nightmare y Fall Asleep in the mirror (TBA)</li>
                    <li>Agregado de Fallen angels (TBA)</li>
                </ul>
                Última actualización: 10/10/2021 <br/>
                Versión 3.3.1 <br/>
                <img src="https://media1.tenor.com/m/cf3FUiZJhLoAAAAd/gahyeon-dreamcatcher.gif" alt="GIF Gahyun"  style={{ width: '100px', height: '100px' }}  />
            </p>
      <button onClick={handleClose}>Cerrar</button>
    </Modal>
  );
};

export default FirstTimeAnnouncement;
