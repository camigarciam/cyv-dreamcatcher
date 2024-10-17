import "../Info.css"

import Albumse from "./Albumse";
import Announcement from "./Announcement";

const ENG= ()=>{
    return(
        <>
        <header className="App-header">
          <Announcement />
        </header>
       <div className="intro">
          <p className="textouno">
            The prices are for those who want to use them as a guide, it is not mandatory to sell withing the prices suggested.
          </p>
          <div className="textodos">
            <p>
              The price in <span className="coloruno">BLUE</span> represents the price equivalent to the album divided by its inclusions and rarity
              </p>
            <p>
              The prince in<span className="colordos"> GREEN </span> is the market used until now.
            </p>
            <p>Last update: October 2024</p>
          </div>
        </div>
        <h4>Click an album to see its price!</h4>
        <Albumse />
        </>

  )
}

export default ENG;