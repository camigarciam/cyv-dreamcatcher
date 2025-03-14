import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para accesibilidad

const Announcement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(false); // Controla la visibilidad
  const [doNotShowToday, setDoNotShowToday] = useState(false); // Estado del checkbox

  useEffect(() => {
    const lastShownDate = localStorage.getItem('lastShownDate');
    const today = new Date().toISOString().slice(0, 10); // Fecha actual en 'YYYY-MM-DD'

    if (lastShownDate !== today) {
      setShowAnnouncement(true); // Mostrar anuncio si no se mostró hoy
    }
  }, []);

  const handleClose = () => {
    setShowAnnouncement(false); // Cierra el modal

    if (doNotShowToday) { 
      const today = new Date().toISOString().slice(0, 10);
      localStorage.setItem('lastShownDate', today); // Guarda la fecha solo si está marcado el checkbox
    } else {
      localStorage.removeItem('lastShownDate'); // Asegura que no se guarde la fecha si no se marca
    }
  };

  const handleCheckboxChange = (event) => {
    setDoNotShowToday(event.target.checked); // Actualiza el estado del checkbox
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
          width: '70%',
          height: '80%',
          boxShadow: "3.5px 3.5px 5px rgb(130,130,130)",
          border: "2px solid rgb(180, 180, 180)",
        },
      }}
    >
      <h2>Somnia!</h2>
      <p>Welcome to the price guide</p>
            <p> These are the newest updates:
                <ul>
                  <li><p><h3>SOMNIAS BOARD</h3>
                  (this is not new anymore but I want people to join) </p></li>
                    <li>Insomnia 3rd kit </li>
                    <li> Web Desing BECAUSE I AM SAD DREAMCTACHER I LOVE YOU YOU ARE MY FIRTS AND LAST LOVES FOREVER</li>
                </ul>
                Last update: March 15th 2025 <br/>
                Version 7.0.0 <br/>
                <img src="https://media1.tenor.com/m/7qFBMxS4NmEAAAAd/siyeon-yoohyeon.gif" alt="GIF heart"  style={{ width: '120px', height: '120px' }}  />
                
            </p>
            <div>
        <label>
          <input 
            type="checkbox" 
            checked={doNotShowToday} 
            onChange={handleCheckboxChange} 
          />
          Do not show this again today
        </label>
      </div>
      <button onClick={handleClose}> Close </button>
    </Modal>
  );
};

export default Announcement;
