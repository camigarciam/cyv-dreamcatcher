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
      <img src="https://kpopcollectorsguide.weebly.com/uploads/2/9/1/9/29199653/a8a64a7cd00be754d84ae6ac018f66d2ca9e993a-hq_orig.jpg" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 100, 250)" }} />
    </div>
  </div>
  )
}

export default Prequele;