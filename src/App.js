import React from 'react';
import RTU from './Components/RTU';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import "./App.css"
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
import { BsFillCollectionFill } from "react-icons/bs";
import { RiSurveyLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

function App() {
  return (
    <Router>
      <>
        <header className="App-header">
          <h1>Precios Dreamcatcher Argentina</h1>
          <img
            className="image"
            alt="header"
            src="https://images.squarespace-cdn.com/content/v1/56eb012f27d4bd29de975fae/1700875260939-BX02C8QG00QCRS9HORVQ/Dreamcatcher_REV_Header.JPG?format=2500w"
          />
        </header>
        <div className="intro">
          <p className="textouno">
            Los precios son para quien quiera usarlos de guía, no es obligación
            mantenerse en este rango de precios para vende
          </p>
          <p className="texto2">
            Al lado del precio en pesos va a estar el precio en USD EQUIVALENTE
            APROXIMADO en <span className="coloruno">celeste</span>
          </p>
          <p>
            Si el precio está en USD DE AFUERA va a estar en 
            <span className="colordos"> verde</span>
          </p>
          <p>
          <a className='link' href="https://drive.google.com/drive/folders/1cgD_4xUKB1jORN5S0sHNhq3_mlKynETu?usp=sharing">
          <BsFillCollectionFill /> Photocard Templates 
          </a> </p>
          <a className='link' href="https://docs.google.com/forms/d/e/1FAIpQLSdLIUXlWFGWoX3_1YKj5-10JOBhq0tsLFsU9ScClF0okjpKFQ/viewform">
          <RiSurveyLine /> Dreamcatcher en Argentina
          </a>
          <p>Última actualización: Enero 2024 (dólar a $1100)</p>
        </div>
        <div className='portadas'> 
        <Link to="/NIGHTMARE">
          <img className='portada'
            src="https://upload.wikimedia.org/wikipedia/en/1/12/Dreamcatcher_-_Nightmare.jpg"
            alt="Nightmare"
            title="Nightmare"
          />
        </Link>
        <Link to="/FAITM">
          <img className='portada'
            src="https://i.scdn.co/image/ab67616d0000b27300d0a05a7eb734aba007ad3b"
            alt="FAITM"
            title="FAITM"
          />
        </Link>
        <Link to="/PREQUEL">
          <img className='portada'
             src='https://pbs.twimg.com/media/GC17pFDXwAAEfBn?format=jpg&name=900x900'
            alt="prequel"
            title="Prequel"
          />
        </Link>
        <Link to="/ETE">
          <img className='portada'
             src='https://i.scdn.co/image/ab67616d0000b273d8299d772da6489400f37ab8'
            alt="ETE"
            title="ETE"
          />
        </Link>
        <Link to="/AITC">
          <img className='portada'
            src="https://i.scdn.co/image/ab67616d0000b2738c0b09a8965bb16ff3f7d889"
            alt="AITC"
            title="AITC"
          />
        </Link>
        <Link to="/TEON">
          <img className='portada'
             src='https://i.scdn.co/image/ab67616d0000b2735497178d3e5f7cd1f88f9be8'
            alt="TEON"
            title="TEON"
          />
        </Link>
        <Link to="/ROD">
          <img className='portada'
             src='https://i.scdn.co/image/ab67616d0000b273dd525e34b35a55ca3763e28d'
            alt="ROD"
            title="ROD"
          />
        </Link>
        <Link to="/TTOL">
          <img className='portada'
             src='https://i.scdn.co/image/ab67616d0000b273107ade016c96b4769c200bc4'
            alt="TTOL"
            title="TTOL"
          />
        </Link>
        <Link to="/LM">
          <img className='portada'
            src="https://i.scdn.co/image/ab67616d0000b273994278a5092323151972886f"
            alt="Lose Myself"
            title="Lose Myself"
          />
        </Link>
        <Link to="/RTU">
          <img
          className='portada'
            src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/28/4c/49/284c49f4-3d31-5648-8e2e-1d5c073667c1/cover_KM0017912_1.jpg/1200x1200bf-60.jpg"
            alt="Road to Utopia"
            title="Road to Utopia"
          />
        </Link>
        <Link to="/SH">
          <img
          className='portada'
            src="https://i.scdn.co/image/ab67616d00001e02d902c8faa0d5eb0fe7c29695"
            alt="Summer Holiday"
            title="Summer Holiday"
          />
        </Link>
        <Link to="/ASU">
          <img
          className='portada'
            src="https://i0.wp.com/noobheavy.com/wp-content/uploads/2022/07/image-25.png?fit=640%2C640&ssl=1"
            alt="Save Us"
            title="Save Us"
          />
        </Link>
        <Link to="/AFU">
          <img
          className='portada'
            src="https://i.scdn.co/image/ab67616d00001e02c7d075ac409f015413350f6d"
            alt="Follow Us"
            title="Follow Us"
          />
        </Link>
        <Link to="/AFRU">
          <img
          className='portada'
            src="https://i.scdn.co/image/ab67616d0000b2737a95bc64165227445ad40054"
            alt="From Us"
            title="From Us"
          />
        </Link>
        <Link to="/VS">
          <img
          className='portada'
            src="https://i.scdn.co/image/ab67616d00001e028c2e5ad74cb2c2156da791b9"
            alt="Versus Villains"
            title="Versus Villains"
          />
        </Link>
        <Link to="/Merch">
          <img
          className='portada'
            src="https://i.pinimg.com/736x/a1/fa/4b/a1fa4b536ccf520a1fdd2f81e5ad5e7c.jpg"
            alt="Merch"
            title="Merch"
          />
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
      </Routes>
    </div>
  );
}


export default App;

