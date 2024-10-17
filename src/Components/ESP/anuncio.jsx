import React, { useState, useEffect } from 'react';
import { BiBorderAll } from 'react-icons/bi';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para accesibilidad

const Anuncio = () => {
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
          width: '80%',
          boxShadow: "3.5px 3.5px 5px rgb(130,130,130)",
          border: "2px solid rgb(180, 180, 180)",
        },
      }}
    >
      <h2>Somnia!</h2>
      <p>Bienvenidx a la lista de precios</p>
            <p> Estas son las últimas actualizaciones:	
                <ul>
                    <li>Nightmare y Fall Asleep in the mirror (reimpresión)</li>
                    <li>Fallen angels & Dream of angels (Agregado, precios en progreso)</li>
                    <li>Albumes japoneses (/Japan)</li>
                    <li>Merch:4th anniversary, Center of time, fly high tour, midnight circus</li>
                    <li>Diseño de la Web</li>
                </ul>
                Última act: 17/10/2024 <br/>
                Versión 4.2.1 <br/>
                <img src="https://media1.tenor.com/m/cf3FUiZJhLoAAAAd/gahyeon-dreamcatcher.gif" alt="GIF Gahyun"  style={{ width: '100px', height: '100px' }}  />
            </p>

      <div>
        <label>
          <input 
            type="checkbox" 
            checked={doNotShowToday} 
            onChange={handleCheckboxChange} 
          />
          No volver a mostrar hoy
        </label>
      </div>
      <button onClick={handleClose}> Cerrar </button>
    </Modal>
  );
};

export default Anuncio;
