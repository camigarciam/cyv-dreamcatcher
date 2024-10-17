import Button from "./Button";
import "../Info.css"

const SHe = ()=>{
    return(
        <div className="infoalbum">
  <h1 className="title">SUMMER HOLIDAY</h1>
  <div className="infoal">
    <div className="infotext">
      <Button/>
      <p>- POBs = from <span className="colorunoa">10usd</span> <span className="colordosa"> 10 usd</span></p>
      <p>- POB poster = <span className="colorunoa">1,5usd</span> <span className="colordosa"> 1 usd</span></p>
      <p>- Stickers = <span className="colorunoa">0,5usd</span> <span className="colordosa"> 0,5 usd</span></p>
      <p className="ver">LIMITED (ver. G)</p>
      <p>- Limited photobook (cd+pb) =  <span className="colorunoa">12usd</span> <span className="colordosa"> 10 usd</span></p>
      <p>- Limited photocard =  <span className="colorunoa"> 6,5 usd</span> <span className="colordosa"> 10 usd</span> </p>
      <p>- PhotoGarland =  <span className="colorunoa">3usd</span> <span className="colordosa"> 5usd (todo)</span></p>
      <p>- Photocard Stand =  <span className="colorunoa">1usd</span><span className="colordosa"> 2 usd</span></p>
      <p className="ver">NORMAL (ver. I,F,T)</p>
      <p>- Photobook (cd+pb) = <span className="colorunoa">8usd</span> <span className="colordosa"> 7 usd</span></p>
      <p>- Photocard =  <span className="colorunoa">3,5usd</span> <span className="colordosa"> 4 usd</span> </p>
      <p>- Film photo =  <span className="colorunoa">2usd</span> <span className="colordosa"> 3 usd</span></p>
      <img src="https://preview.redd.it/v6zrqbnesbf71.jpg?width=1080&crop=smart&auto=webp&s=5763e7d5e62b904a5b2dfa2c12a5b26b60f11757" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(49, 145, 234)" }}/>
    </div>
    <div className="infoalimg ">
    <img src="https://www.musicplaza.com/cdn/shop/products/EGE_954421d0-697e-4a50-9b54-ad059bd50c92_800x.jpg?v=1626676316" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(49, 145, 234)" }} />
    <img src="https://m.media-amazon.com/images/I/61KXsKFM+gS._AC_UF1000,1000_QL80_.jpg" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(49, 145, 234)" }}/>
    </div>
  </div>
</div>
)
}

export default SHe;