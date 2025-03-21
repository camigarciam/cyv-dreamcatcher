import { Link } from "react-router-dom"
import "../Info.css"
import Boton from "./Boton"

const Nightmare =()=>{
    return(
        <div className="infoalbum">
  <div className="infoal">
    <div className="infotext">
    <Boton/>
      <p className="ver">NORMAL (1era impresión)</p>
      <p>-Photobook (cd+pb) = <span className="colordosa">300 usd</span> (base)</p>
      <p>-Photocard =<span className="colordosa">60 usd</span> (base)</p>
      <p>-Poster= ?</p>
      <p className="ver">NORMAL (reimpresión)</p>
      <p>-Photobook (cd+pb) = <span className="colordosa">15usd</span> TBA</p>
      <p>-Photocard =<span className="colordosa">12usd</span> (TBH)</p>
      <p>-Keyring= <span className="colordosa">8usd</span></p>
    </div>
          <img src="https://i.ebayimg.com/images/g/XPUAAOSwg1Jlil9U/s-l1200.jpg" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(98, 109, 113)" }} />
          <img src="https://i.ebayimg.com/images/g/CZoAAOSwzcBkh-Oa/s-l400.jpg" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(98, 109, 113)" }} />
        </div>
      </div>
      
    )
}

export default Nightmare