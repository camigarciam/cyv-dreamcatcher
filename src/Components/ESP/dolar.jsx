
import React, { useEffect, useState } from 'react';
import "../Info.css"

function DolarBlue() {
  const [dolarBlue, setDolarBlue] = useState({
    compra: 'Cargando...',
    venta: 'Cargando...'
  });

  useEffect(() => {
    fetch('https://api.bluelytics.com.ar/v2/latest')
      .then(response => response.json())
      .then(data => {
        setDolarBlue({
          compra: data.blue.value_buy,
          venta: data.blue.value_sell
        });
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="infodolar">
    <p className='dolar-blue'> Precio del dólar:  $ {dolarBlue.compra}</p>
    </div>
  );
}

export default DolarBlue;
