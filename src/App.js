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
            mantenerse en este rango de precios para vender
          </p>
<<<<<<< HEAD
          <div class="textodos">
          <p>
=======
          <p className="texto2">
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
            El precio en <span className="coloruno">AZUL</span> representa el precio argentino en USD, para poder hacer la conversión en cualquier momento
          </p>
          <p>
            EL precio en <span className="colordos">VERDE</span> es el precio internacional
          </p>
          <p>Última actualización: Agosto 2024</p>
<<<<<<< HEAD
          <DolarBlue/>
          <h5>El dolar se actualiza todos los días!</h5>
          </div>
=======
          <DolarBlue />
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
        </div>
        <div className="portadas">
          <Link to="/NIGHTMARE">
            <div className="image-container">
              <img
                className="portada"
                src="https://upload.wikimedia.org/wikipedia/en/1/12/Dreamcatcher_-_Nightmare.jpg"
                alt="Nightmare"
                title="Nightmare"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(98, 109, 113)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
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
                title="FAITM"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 131, 131)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Fall Asleep in the Mirror</div>
            </div>
          </Link>
          <Link to="/PREQUEL">
            <div className="image-container">
              <img
                className="portada"
                src='https://i.scdn.co/image/ab67616d0000b27331b95b252ae186111fb347d8'
                alt="Prequel"
                title="Prequel"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 100, 250)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Prequel</div>
            </div>
          </Link>
          <Link to="/ETE">
            <div className="image-container">
              <img
                className="portada"
                src='https://i.scdn.co/image/ab67616d0000b273d8299d772da6489400f37ab8'
                alt="ETE"
                title="ETE"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(26, 162, 172)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
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
                title="AITC"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Alone in the City</div>
            </div>
          </Link>
          <Link to="/TEON">
            <div className="image-container">
              <img
                className="portada"
                src='https://i.scdn.co/image/ab67616d0000b2735497178d3e5f7cd1f88f9be8'
                alt="TEON"
                title="TEON"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(12, 137, 112)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">The End of Nightmare</div>
            </div>
          </Link>
          <Link to="/ROD">
            <div className="image-container">
              <img
                className="portada"
                src='https://i.scdn.co/image/ab67616d0000b273dd525e34b35a55ca3763e28d'
                alt="ROD"
                title="ROD"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(189, 26, 26" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Raid of Dream</div>
            </div>
          </Link>
          <Link to="/TTOL">
            <div className="image-container">
              <img
                className="portada"
                src='https://i.scdn.co/image/ab67616d0000b273107ade016c96b4769c200bc4'
                alt="TTOL"
                title="TTOL"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(87, 53, 3)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">The Tree of Language</div>
            </div>
          </Link>
          <Link to="/LM">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b273994278a5092323151972886f"
                alt="Lose Myself"
                title="Lose Myself"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(0, 0, 155)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Lose Myself</div>
            </div>
          </Link>
          <Link to="/RTU">
            <div className="image-container">
              <img
                className="portada"
                src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/28/4c/49/284c49f4-3d31-5648-8e2e-1d5c073667c1/cover_KM0017912_1.jpg/1200x1200bf-60.jpg"
                alt="Road to Utopia"
                title="Road to Utopia"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(186, 186, 215" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Road to Utopia</div>
            </div>
          </Link>
          <Link to="/SH">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e02d902c8faa0d5eb0fe7c29695"
                alt="Summer Holiday"
                title="Summer Holiday"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(49, 145, 234)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Summer Holiday</div>
            </div>
          </Link>
          <Link to="/ASU">
            <div className="image-container">
              <img
                className="portada"
                src="https://i0.wp.com/noobheavy.com/wp-content/uploads/2022/07/image-25.png?fit=640%2C640&ssl=1"
                alt="Save Us"
                title="Save Us"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(240, 203, 109)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Save Us</div>
            </div>
          </Link>
          <Link to="/AFU">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e02c7d075ac409f015413350f6d"
                alt="Follow Us"
                title="Follow Us"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(217, 0, 0)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Follow Us</div>
            </div>
          </Link>
          <Link to="/AFRU">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2737a95bc64165227445ad40054"
                alt="From Us"
                title="From Us"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(82, 228, 42)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">From Us</div>
            </div>
          </Link>
          <Link to="/VS">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e028c2e5ad74cb2c2156da791b9"
                alt="Versus Villains"
                title="Versus Villains"
<<<<<<< HEAD
                style={{ boxShadow: "3.5px 3.5px 0px rgb(140, 12, 12)" }}
=======
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
              />
              <div className="overlay">Versus Villains</div>
            </div>
          </Link>
          <Link to="/VRS">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2731be74ecf7c58d22c00eea468"
                alt="Versus Virtuous"
                title="Versus Virtuous"
              />
              <div className="overlay">Versus Virtuous</div>
            </div>
          </Link>
          <Link to="/Merch">
            <div className="image-container">
              <img
                className="portada"
                src="https://i.pinimg.com/736x/a1/fa/4b/a1fa4b536ccf520a1fdd2f81e5ad5e7c.jpg"
                alt="Merch"
                title="Merch"
              />
              <div className="overlay">Merch</div>
            </div>
          </Link>
          <Link to="/FAQs">
            <div className="image-container">
              <img
                className="portada"
<<<<<<< HEAD
                src="https://pbs.twimg.com/media/GYuHMyoXEAAgAeh?format=jpg&name=large"
=======
                src="https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/278488414_532387521726708_328084143107754458_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xdnSEw9ugqUQ7kNvgHsBD2u&_nc_ht=scontent.faep8-2.fna&oh=00_AYCT9zpySyS3YmyIAf_8_plqBqXJUyE_jkRweNxXKz4u5Q&oe=66B8C651"
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca
                alt="FAQs"
                title="FAQs"
              />
              <div className="overlay">FAQs</div>
            </div>
          </Link>
        </div>
        <h4>Clickea un album para ver los precios!</h4>
        <AlbumContainer />
        <footer className='footer'>
          <p>cr. @suikhan_ y @chaechae.iz </p>
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

function AlbumContainer() {
  const location = useLocation();
  const albumContainerRef = React.useRef(null);

  React.useEffect(() => {
    // Mostrar el albumContainer cuando se cambia a una ruta que no sea la home
    if (location.pathname !== "/") {
      albumContainerRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="album-container" ref={albumContainerRef}>
      <Routes>
        <Route path="/NIGHTMARE" element={<Nightmare />} />
        <Route path="/FAITM" element={<FAITM />} />
        <Route path="/PREQUEL" element={<Prequel />} />
        <Route path="/ETE" element={<ETE />} />
        <Route path="/AITC" element={<AITC />} />
        <Route path="/TEON" element={<TEON />} />
        <Route path="/ROD" element={<ROD />} />
        <Route path="/TTOL" element={<TTOL />} />
        <Route path="/RTU" element={<RTU />} />
        <Route path="/LM" element={<LM />} />
        <Route path="/SH" element={<SH />} />
        <Route path="/ASU" element={<ASU />} />
        <Route path="/AFU" element={<AFU />} />
        <Route path="/AFRU" element={<AFRU />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/VS" element={<VS />} />
        <Route path="/VRS" element={<VRS />} />
        <Route path="/FAQs" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
