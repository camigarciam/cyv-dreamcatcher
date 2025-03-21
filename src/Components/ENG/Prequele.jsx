import Button from "./Button";
import "../Info.css"

const Prequele = ()=>{
    return(<div className="infoalbum">
    <h1 className="title">PREQUEL</h1>
    <div className="infoal">
      <div className="infotext">
        <Button/>
        <p className="ver">NORMAL (ver. Before-After)</p>
        <p>-Photobook (cd+pb) = <span className="colordosa">70-80 usd</span></p>
        <p>-Photocard = <span className="colordosa">30 usd</span></p>
        <p>-Poster= ?</p>
      </div>
      <img src="https://i.ebayimg.com/00/s/MTI4MFgxMjgw/z/ky8AAOSwrDNkBZnc/$_57.JPG?set_id=880000500F" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 100, 250)" }} />
      <img src="https://pm1.aminoapps.com/6635/549ca6073772d33d7b871466cebf50fde9dd3320_hq.jpg" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 100, 250)" }} />
    </div>
  </div>
  )
}

export default Prequele;