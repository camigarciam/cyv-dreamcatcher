import Button from "./Button";
import "../Info.css"

const CSLe = ()=>{
    return(
        <div className="infoalbum">
  <h1 className="title">Christmas Sweet Love</h1>
  <div className="infoal">
    <div className="infotext">
      <Button/>
      <p>POBs = 8 - 12usd</p>
      <p className="ver">POCA (just one ver.)</p>
      <p>-Outbox + stickers = <span className="colorunoa"></span><span className="colordosa"> 1usd</span></p>
      <p>-Photocard = <span className="colorunoa"> </span> <span className="colordosa"> 2.5 usd</span></p>
      <p>-QR = <span className="colorunoa"> </span> <span className="colordosa"> 4 usd</span></p> 
    </div>
    <img src="https://pbs.twimg.com/media/Gfw_wWfXUAAS2_y?format=jpg&name=4096x4096" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }} />
  </div>
</div>


  )
}

export default CSLe;