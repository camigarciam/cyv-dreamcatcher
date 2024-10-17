import Boton from "./Boton";
import "../Info.css"

const AITC = ()=>{
    return(
        <div className="infoalbum">
  <h1 className="title">ALONE IN THE CITY</h1>
  <div className="infoal">
    <div className="infotext">
      <Boton/>
      <p>Beneficio de Preventa (POBs) = ?</p>
      <p className="ver">NORMAL (ver. Light-Shade)</p>
      <p>-Photobook (cd+pb) = <span className="colorunoa">40usd </span><span className="colordosa"> 40-50usd</span></p>
      <p>-Photocard = <span className="colorunoa"> 12 usd</span> <span className="colordosa"> 10 usd</span></p>
      <p>-Stickers = <span className="colorunoa"> 2usd</span> <span className="colordosa"> 5 usd</span></p>
      <p>-Poster = <span className="colorunoa"> 3usd</span> <span className="colordosa"> 5 usd</span></p>
    </div>
    <img src="https://www.kyyo.co.uk/cdn/shop/products/Capture_d_ecran_2018-12-01_a_15.12.23_1024x1024.png?v=1543702139" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }} />
    <img src="https://down-id.img.susercontent.com/file/a7219d2c80ac60c40eef8c438a9858ec" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }} />
  </div>
</div>


  )
}

export default AITC;