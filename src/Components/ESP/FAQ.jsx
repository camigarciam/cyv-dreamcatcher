import { BsFillCollectionFill } from "react-icons/bs";
import "./Info.css"
import { RiSurveyLine } from "react-icons/ri";
import Boton from "./Boton";

const FAQ = ()=>{
    return(
        <div className="infoalbum">
            <h1 className="title"> Información de Interes / FAQs</h1>
            <div className="infoal">
        <div className="infotext">
            <Boton/>
        <p><a className='link' href="https://drive.google.com/drive/folders/1bSYCJtbrtS2vTd3IWCVSd10f0f0dFH8W?usp=sharing">
          <BsFillCollectionFill /> Photocard Templates 
          </a> </p>
          <a className='link' href="https://docs.google.com/forms/d/e/1FAIpQLSdLIUXlWFGWoX3_1YKj5-10JOBhq0tsLFsU9ScClF0okjpKFQ/viewform">
          <RiSurveyLine /> Dreamcatcher en Argentina
          </a>
            <div className="pregunta">
            <h3 className="preg">¿El dólar está actualizado?</h3>
            <p className="res">Sí, el dólar se actualiza solo todos los días </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">¿Por qué están solo los precios en dólares?</h3>
            <p className="res">Debido al cambio constante del valor, se decidió poner en dólares para poder tener los precios actualizados </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">¿Por qué hay dos precios distintos?</h3>
            <p className="res">El precio argentino se basa en el valor total del álbum y la distribución proporcional de los precios según su contenido.
                El precio internacional de las inclusiones tiene otros fundamentos, como querer cubrir el precio total del álbum solo con las pcs o, al comprarse muchos albumes, querer sacarse las inclusiones de encima.
                Al basarse en distintas maneras de decidir un precio, se decidió poner ambos para tener en cuenta al momento de comprar o vender merch
            </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">Hay un error/quiero hacer una sugerencia</h3>
            <p className="res"> Escribime por mi instagram por favor! <a className="link" href="https://www.instagram.com/suikhan_/">@suikhan_</a>
            </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">Cómo hiciste la página?</h3>
            <p className="res"> Está codeada y subida en firebase! <a className="link" href="https://github.com/camigarciam/cyv-dreamcatcher"> mirá el código completo acá! (github)</a>
            </p>
            </div>
            <div className="pregunta">
            <h3 className="preg"> Gracias por tanto! quiero colaborar</h3>
            <p className="res"> Ya un "gracias" es suficiente pero si queres colaborar con un cafesito🥹 <a className="link" href="link.mercadopago.com.ar/suikhan"> link a mercado pago</a>
            </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default FAQ;