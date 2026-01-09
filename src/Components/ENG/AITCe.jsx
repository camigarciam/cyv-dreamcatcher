import Button from "./Button";
import "../Info.css"

const AITCe = ()=>{
    return(
        <div className="infoalbum">
  <h1 className="title">ALONE IN THE CITY</h1>
  <div className="infoal">
    <div className="infotext">
      <Button/>
      <p>POBs = ?</p>
      <p className="ver">NORMAL (ver. Light-Shade)</p>
      <p>-Photobook (cd+pb) = <span className="colorunoa">40usd </span><span className="colordosa"> 40-50usd</span></p>
      <p>-Photocard = <span className="colorunoa"> 12 usd</span> <span className="colordosa"> 10 usd</span></p>
      <p>-Stickers = <span className="colorunoa"> 2usd</span> <span className="colordosa"> 5 usd</span></p>
      <p>-Poster = <span className="colorunoa"> 3usd</span> <span className="colordosa"> 5 usd</span></p>
    </div>
    <img src="https://pbs.twimg.com/media/EfGbxKEWkAAMirP?format=jpg&name=large" alt="Album Cover" style={{ boxShadow: "3.5px 3.5px 0px rgb(223, 34, 141)" }} />

  </div>
</div>


  )
}

export default AITCe;