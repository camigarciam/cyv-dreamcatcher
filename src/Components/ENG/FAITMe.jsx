import Button from "./Button";
import "../Info.css"

const FAITMe = ()=>{
    return(
        <div className="infoalbum">
  <h1 className="title">FALL ASLEEP IN THE MIRROR</h1>
  <div className="infoal">
    <div className="infotext">
      <Button/>
      <p className="ver">NORMAL (1st press)</p>
      <p>-Photobook (cd+pb) = <span className="colordosa">80 usd</span> (base)</p>
      <p>-Photocard = <span className="colordosa">40-50 usd</span></p>
      <p>-Poster= ?</p>
      <p className="ver">NORMAL (reprint)</p>
      <p>-Photobook (cd+pb) = <span className="colordosa">15usd</span> TBA</p>
      <p>-Photocard =<span className="colordosa">12usd</span> (TBH)</p>
      <p>-Keyring= <span className="colordosa">8usd</span></p>
    </div>
    <img src="https://i.ebayimg.com/images/g/gB8AAOSwTJFkSdg8/s-l1200.webp" style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 131, 131)" }}/>
    <img src="https://kpopcollectorsguide.weebly.com/uploads/2/9/1/9/29199653/edited/pemmsm1.jpg" style={{ boxShadow: "3.5px 3.5px 0px rgb(203, 131, 131)" }}/>
  </div>
</div>

    )

}

export default FAITMe;