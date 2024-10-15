import "../Info.css"
import React from 'react';

import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import"./../../App.css"
import Nightmaree from "./Nightmaree";
import FAITMe from "./FAITMe";
import Prequele from "./Prequele";
import ETEe from "./ETEe";
import AITCe from "./AITCe";
import TEONe from "./TEONe";
import RODe from "./RODe";
import TTOLe from "./TTOLe";
import LMe from "./LMe";
import RTUe from "./RTUe";
import SHe from "./SHe";
import ASUe from "./ASUe";
import AFUe from "./AFUe";
import AFRUe from "./AFRUe";
import VSe from "./VSe";
import VRSe from "./VRSe";
import FAQe from "./FAQe";
import Merche from "./Merche";
import Japan from "./Japan";

function Albumse() {
  const albumContainerRef = React.useRef(null); // Definir la referencia para el contenedor del álbum

  const handleAlbumClick = () => {
    // Hacer scroll hacia el contenedor del álbum
    if (albumContainerRef.current) {
      albumContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <>
        <div className="albums"ref={albumContainerRef}>
          <Link to="/NIGHTMAREe" onClick={handleAlbumClick}>
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
          <Link to="/FAITMe" onClick={handleAlbumClick}>
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
          <Link to="/PREQUELe"onClick={handleAlbumClick}>
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
          <Link to="/ETEe" onClick={handleAlbumClick}>
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
          <Link to="/AITCe" onClick={handleAlbumClick}>
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
          <Link to="/TEONe" onClick={handleAlbumClick}>
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
          <Link to="/RODe" onClick={handleAlbumClick}>
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
          <Link to="/TTOLe"onClick={handleAlbumClick}>
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
          <Link to="/LMe" onClick={handleAlbumClick}>
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
          <Link to="/RTUe"onClick={handleAlbumClick}>
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
          <Link to="/SHe"onClick={handleAlbumClick}>
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
          <Link to="/ASUe" onClick={handleAlbumClick}>
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
          <Link to="/AFUe" onClick={handleAlbumClick}>
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
          <Link to="/AFRUe" onClick={handleAlbumClick}>
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
          <Link to="/VSe" onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d0000b2738c2e5ad74cb2c2156da791b9"
                alt="VS"
                title="Vision"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(172, 71, 116)" }}
              />
              <div className="overlay">Versus: Villains</div>
            </div>
          </Link>
          <Link to="/VRSe"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://i.scdn.co/image/ab67616d00001e021be74ecf7c58d22c00eea468"
                alt="VRS"
                title="Virtuous"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">Versus: Virtuous</div>
            </div>
          </Link>
          <Link to="/JAPAN"onClick={handleAlbumClick}>
            <div className="image-container">
              <img
                className="portada"
                src="https://img.hmv.co.jp/image/jacket/400/0000100/1/1/438.jpg"
                alt="Japanese albums "
                title="Japanese albums"
                style={{ boxShadow: "3.5px 3.5px 0px rgb(133, 171, 240)" }}
              />
              <div className="overlay">Japanese Albums</div>
            </div>
          </Link>
          <Link to="/MERCHe"onClick={handleAlbumClick}>
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
          <Link to="/FAQe"onClick={handleAlbumClick}>
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
              
      </>
  );
}


export default Albumse

