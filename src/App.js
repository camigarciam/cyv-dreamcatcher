import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import ESP from './Components/ESP/ESP';
import ENG from './Components/ENG/ENG';
import Nightmare from './Components/ESP/Nightmare';
import Prequel from './Components/ESP/Prequel';
import Nightmaree from './Components/ENG/Nightmaree';
import Prequele from './Components/ENG/Prequele';
import FAITM from './Components/ESP/FAITM';
import FAITMe from './Components/ENG/FAITMe';
import ETE from './Components/ESP/ETE';
import ETEe from './Components/ENG/ETEe';
import AITC from './Components/ESP/AITC';
import AITCe from './Components/ENG/AITCe';
import TEON from './Components/ESP/TEON';
import TEONe from './Components/ENG/TEONe';
import ROD from './Components/ESP/ROD';
import RODe from './Components/ENG/RODe';
import TTOL from './Components/ESP/TTOL';
import TTOLe from './Components/ENG/TTOLe';
import LM from './Components/ESP/LM';
import LMe from './Components/ENG/LMe';
import RTU from './Components/ESP/RTU';
import RTUe from './Components/ENG/RTUe';
import SH from './Components/ESP/SH';
import SHe from './Components/ENG/SHe';
import ASU from './Components/ESP/ASU';
import ASUe from './Components/ENG/ASUe';
import AFU from './Components/ESP/AFU';
import AFUe from './Components/ENG/AFUe';
import AFRU from './Components/ESP/AFRU';
import AFRUe from './Components/ENG/AFRUe';
import VSe from './Components/ENG/VSe';
import Merch from './Components/ESP/Merch';
import Merche from './Components/ENG/Merche';
import FAQ from './Components/ESP/FAQ';
import FAQe from './Components/ENG/FAQe';
import VS from './Components/ESP/VS';
import VRSe from './Components/ENG/VRSe';
import VRS from './Components/ESP/VRS';
import Japan from './Components/ENG/Japan';
import Somnia from './Components/ENG/Somnia';
import CSLe from './Components/ENG/CSLe';
import CSL from './Components/ESP/CSL';



function App() {
  const albumContainerRef = React.useRef(null); // Definir la referencia para el contenedor del álbum


  return (
    <>
    <Router>
        <header className="App-header">
    
        <h1>DREAMCATCHER WTS GUIDE</h1>
          <img
            className="image"
            alt="header"
            src="https://pbs.twimg.com/media/GfOxNHAasAI-QoT?format=jpg&name=4096x4096"
          />
        </header>
          <nav className='idiomas'>
            <h4>Select your location:</h4>
          <Link to="/ESP">
          <div>
            <img src="https://em-content.zobj.net/source/apple/155/flag-for-argentina_1f1e6-1f1f7.png" className='idioma'/>
            </div>
          </Link>
          <Link to="/WW">
          <div>
            <img src="https://i.pinimg.com/originals/71/12/e8/7112e8444e01f8f7e5e0e0aa81a59b35.png" className='idioma'/>
            </div>
          </Link>
          </nav>
          <Routes>
            <Route path="/ESP" element={<ESP />} />
            <Route path="/WW" element={<ENG />} />
            <Route path="/Nightmare" element={<Nightmare />} />
            <Route path ="Nightmaree" element={<Nightmaree />} />
            <Route path="/Prequel" element={<Prequel />} />
            <Route path="/Prequele" element= {<Prequele />} />
            <Route path="/FAITM" element={<FAITM />} />
            <Route path="/FAITMe" element={<FAITMe />} />
            <Route path ="/ETE" element={<ETE />} />
            <Route path="/ETEe" element={<ETEe />} />
            <Route path="/AITC" element={<AITC />} />
            <Route path="/AITCe" element={<AITCe />} />
            <Route path="/TEON" element={<TEON />} />
            <Route path="/TEONe" element={<TEONe />} />
            <Route path="/ROD" element={<ROD />} />
            <Route path="/RODe" element={<RODe />} />
            <Route path="/TTOL"element={<TTOL />} />
            <Route path="/TTOLe" element={<TTOLe />} />
            <Route path="/LM" element={<LM />} />
            <Route path="/LMe" element={<LMe />} />
            <Route path="/RTU" element={<RTU/>} />
            <Route path="/RTUe" element={<RTUe />} />
            <Route path="/SH" element={<SH />} />
            <Route path="/SHe" element={<SHe />} />
            <Route path="/ASU" element={<ASU />} />
            <Route path="/ASUe" element={<ASUe />} />
            <Route path="/AFU" element={<AFU />} />
            <Route path="/AFUe" element={<AFUe />} />
            <Route path="/AFRU" element={<AFRU />} />
            <Route path="/AFRUe" element={<AFRUe />} />
            <Route path="/VS" element={<VS />} />
            <Route path="/VSe" element={<VSe />} />
            <Route path="/VRS" element={<VRS />} />
            <Route path="/VRSe" element={<VRSe />} />
            <Route path="/CSL" element={<CSL />} />
            <Route path="/CSLe" element={<CSLe />} />
            <Route path="/JAPAN" element={<Japan />} /> 
            <Route path="/Merch" element={<Merch />} />
            <Route path="/Merche" element={<Merche />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/FAQe" element={<FAQe />} />
            <Route path="/SOMNIA" element={<Somnia />} />
          </Routes>
        <footer className='footer'>
          <p>cr. @suikhan_ y @chaechae.iz</p>
          <p> Dreamcatcher Argentina:
            <a className='redes' href='https://www.instagram.com/dreamcatcherargentina/'><FaInstagram /></a>
            <a className="redes" href='https://twitter.com/ArgDreamcatcher'><FaTwitter /></a>
            <a className='redes' href='https://www.facebook.com/DreamcatcherArgentina'><FaFacebookF /></a>
          </p>
          <p>Ver 6.0.0</p>
        </footer>
    </Router>
    </>
  );
}

 
export default App;
