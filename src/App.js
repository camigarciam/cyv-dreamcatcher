import React from 'react';
import RTU from './Components/RTU';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LM from './Components/LM';
import Nightmare from './Components/Nightmare';
import FAITM from './Components/FAITM';
import Prequel from './Components/Prequel';
import ETE from './Components/ETE';
import AITC from './Components/AITC';
import TEON from './Components/TEON';
import ROD from './Components/ROD';
import TTOL from './Components/TTOL';
import SH from './Components/SH';
import ASU from './Components/ASU';
import AFU from './Components/AFU';
import AFRU from './Components/AFRU';
import Merch from './Components/Merch';
import VS from './Components/VS';
import VRS from './Components/VRS';
import DolarBlue from './Components/dolar';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import FAQ from './Components/FAQ';

function App() {
  const albumContainerRef = React.useRef(null); // Definir la referencia para el contenedor del álbum

  const handleAlbumClick = () => {
    // Hacer scroll hacia el contenedor del álbum
    if (albumContainerRef.current) {
      albumContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <>
        <header className="App-header">
          <h1>Precios Dreamcatcher Argentina</h1>
          <img
            className="image"
            alt="header"
            src="https://www.allkpop.com/upload/2024/06/content/280615/web_data/allkpop_1719569847_20240628-dreamcatcher1.jpg"
          />
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
            <DolarBlue />
            <h5>El dólar se actualiza todos los días!</h5>
          </div>
        </div>
        
        <div className="albums"ref={albumContainerRef}>
          <Link to="/NIGHTMARE">
            <div className="image-container">
              <img
                className="portada"
                src="https://upload.wikimedia.org/wikipedia/en/1/12/Dreamcatcher_-_Nightmare.jpg"
                alt="Nightmare"
                title="Nightmare"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(98, 109, 113)" }}
              />
              <div className="overlay">Nightmare</div>
            </div>
          </Link>
          <Link to="/FAITM">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b27300d0a05a7eb734aba007ad3b"
                alt="FAITM"
                title="Fall Asleep in the Mirror"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 131, 131)" }}
              />
              <div className="overlay">Fall Asleep in the Mirror</div>
            </div>
          </Link>
          <Link to="/PREQUEL">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b27331b95b252ae186111fb347d8"
                alt="Prequel"
                title="Prequel"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 100, 250)" }}
              />
              <div className="overlay">Prequel</div>
            </div>
          </Link>
          <Link to="/ETE">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273d8299d772da6489400f37ab8"
                alt="ETE"
                title="Escape the Era"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(26, 162, 172)" }}
              />
              <div className="overlay">Escape the Era</div>
            </div>
          </Link>
          <Link to="/AITC">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2738c0b09a8965bb16ff3f7d889"
                alt="AITC"
                title="Alone in the City"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }}
              />
              <div className="overlay">Alone in the City</div>
            </div>
          </Link>
          <Link to="/TEON">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2735497178d3e5f7cd1f88f9be8"
                alt="TEON"
                title="The End of Nightmare"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(12, 137, 112)" }}
              />
              <div className="overlay">The End of Nightmare</div>
            </div>
          </Link>
          <Link to="/ROD">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273dd525e34b35a55ca3763e28d"
                alt="ROD"
                title="Raid of Dream"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(189, 26, 26)" }}
              />
              <div className="overlay">Raid of Dream</div>
            </div>
          </Link>
          <Link to="/TTOL">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273107ade016c96b4769c200bc4"
                alt="TTOL"
                title="The Tree of Language"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(87, 53, 3)" }}
              />
              <div className="overlay">The Tree of Language</div>
            </div>
          </Link>
          <Link to="/LM">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273994278a5092323151972886f"
                alt="LM"
                title="Lose Myself"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(0, 0, 155)" }}
              />
              <div className="overlay">Lose Myself</div>
            </div>
          </Link>
          <Link to="/RTU">
            <div className="image-container">
              <img
                className="portada"
                src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/28/4c/49/284c49f4-3d31-5648-8e2e-1d5c073667c1/cover_KM0017912_1.jpg/1200x1200bf-60.jpg"
                alt="RTU"
                title="Road to Utopia"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(186, 186, 215)" }}
              />
              <div className="overlay">Road to Utopia</div>
            </div>
          </Link>
          <Link to="/SH">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e02d902c8faa0d5eb0fe7c29695"
                alt="SH"
                title="Summer Holiday"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(49, 145, 234)" }}
              />
              <div className="overlay">Summer Holiday</div>
            </div>
          </Link>
          <Link to="/ASU">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273d5db2e57a278b11e009b5cc6"
                alt="ASU"
                title="Apocalypse: Save Us"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(240, 203, 109)" }}
              />
              <div className="overlay">Apocalypse: Save Us</div>
            </div>
          </Link>
          <Link to="/AFU">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273c7d075ac409f015413350f6d"
                alt="AFU"
                title="Apocalypse: Follow Us"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(234, 57, 93)" }}
              />
              <div className="overlay">Apocalypse: Follow Us</div>
            </div>
          </Link>
          <Link to="/AFRU">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2737a95bc64165227445ad40054"
                alt="AFRU"
                title="Apocalypse: Follow Us"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(75, 195, 60)" }}
              />
              <div className="overlay">Apocalypse: Follow Us</div>
            </div>
          </Link>
          <Link to="/VS">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2738c2e5ad74cb2c2156da791b9"
                alt="VS"
                title="Vision"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(172, 71, 116)" }}
              />
              <div className="overlay">Vision</div>
            </div>
          </Link>
          <Link to="/VRS">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e021be74ecf7c58d22c00eea468"
                alt="VRS"
                title="Vibes"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">Virtuous</div>
            </div>
          </Link>
          <Link to="/MERCH">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.pinimg.com/736x/a1/fa/4b/a1fa4b536ccf520a1fdd2f81e5ad5e7c.jpg"
                alt="Merch"
                title="Merch"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">Merch</div>
            </div>
          </Link>
          <Link to="/FAQ">
            <div className="image-container">
              <img
                className="portada"
                src="https://pbs.twimg.com/media/GYuHMyoXEAAgAeh?format=jpg&name=large"
                alt="FAQ"
                title="FAQ"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">FAQ</div>
            </div>
          </Link>
        </div>

        <h4>Clickea un álbum para ver los precios!</h4>

        <Routes>
          <Route path="/NIGHTMARE" element={<Nightmare />} />
          <Route path="/FAITM" element={<FAITM />} />
          <Route path="/PREQUEL" element={<Prequel />} />
          <Route path="/ETE" element={<ETE />} />
          <Route path="/AITC" element={<AITC />} />
          <Route path="/TEON" element={<TEON />} />
          <Route path="/ROD" element={<ROD />} />
          <Route path="/TTOL" element={<TTOL />} />
          <Route path="/LM" element={<LM />} />
          <Route path="/RTU" element={<RTU />} />
          <Route path="/SH" element={<SH />} />
          <Route path="/ASU" element={<ASU />} />
          <Route path="/AFU" element={<AFU />} />
          <Route path="/AFRU" element={<AFRU />} />
          <Route path="/VS" element={<VS />} />
          <Route path="/VRS" element={<VRS />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Merch" element={<Merch />} />
        </Routes>
        
        <footer className='footer'>
          <p>cr. @suikhan_ y @chaechae.iz</p>
          <p>Redes Dreamcatcher Argentina:
            <a className='redes' href='https://www.instagram.com/dreamcatcherargentina/'><FaInstagram /></a>
            <a className="redes" href='https://twitter.com/ArgDreamcatcher'><FaTwitter /></a>
            <a className='redes' href='https://www.facebook.com/DreamcatcherArgentina'><FaFacebookF /></a>
          </p>
        </footer>
      </>
    </Router>
  );
}

  

export default App;
