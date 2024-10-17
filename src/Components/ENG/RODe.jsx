import Button from "./Button";
import "../Info.css"

const RODe = ()=>{
    return(
<div className="infoalbum">
  <h1 className="title">RAID OF DREAM</h1>
  <div className="infoal">
    <div className="infotext">
      <Button/>
      <p>-POBs =  <span className="colorunoa">30usd</span> <span className="colordosa">40usd </span></p>
      <p>-Photocard =<span className="colordosa"> <span className="colorunoa">8usd</span> 10usd</span></p>
      <p className="ver">LIMITED</p>
      <p>- Limited photobook (cd+pb) = <span className="colordosa">40usd <span className="colorunoa">40-50usd</span></span></p>
      <p>- Limited group photocards(+box+mirror) = <span className="colorunoa">6usd <span className="colordosa">3usd</span></span></p>
      <p>- Transparent photocard=<span className="colorunoa">3usd <span className="colordosa">4usd</span> </span></p>
      <p>- Limited poster =  <span className="colorunoa">3usd <span className="colordosa">2,5usd</span> </span></p>
      <p className="ver">NORMAL </p>
      <p>-Photobook (cd+pb) = <span className="colorunoa">30usd <span className="colordosa">25-30usd</span></span></p>
    </div>
    <img src="https://d3tvwjfge35btc.cloudfront.net/Assets/GalleryImage/15/118/L_g0114111815.jpg" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(189, 26, 26" }} />
    <img src="https://i.redd.it/z1o34k3y9vgb1.jpg" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(189, 26, 26" }} />
  </div>
</div>

  )
}

export default RODe;