import FirstTimeAnnouncement from "./anuncio"
import "./Info.css";
import DolarBlue from "./dolar";
import Albums from "./Albums";
import"./../../App.css"
import Anuncio from "./anuncio";


const ESP= ()=>{
    return(
        <>
        <header className="App-header">
          <Anuncio/>
        </header>
       <div className="intro">
          <p className="textouno">
            Los precios son para quien quiera usarlos de guía, no es obligación
            mantenerse en este rango de precios para vender.
          </p>
          <div className="textodos">
            <p>
              El precio en <span className="coloruno">AZUL</span> representa el precio argentino en USD, para poder hacer la conversión en cualquier momento.
            </p>
            <p>
              El precio en <span className="colordos">VERDE</span> es el precio internacional.
            </p>
            <p>Última actualización: Octubre 2024</p>
            <DolarBlue /> (ARGENTINA)
            <h5>El dólar se actualiza todos los días!</h5>
          </div>
        </div>
        <h4>Clickea un álbum para ver los precios!</h4>
        <Albums />

        </>

  )
}

export default ESP;