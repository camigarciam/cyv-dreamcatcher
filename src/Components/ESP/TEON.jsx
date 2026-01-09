import Boton from "./Boton";
import "../Info.css"

const TEON = ()=>{
    return(
        <div className="infoalbum">
        <h1 className="title">THE END OF NIGHTMARE</h1>
        <div className="infoal">
          <div className="infotext">
            <Boton/>
            <p className="ver">Beneficio de Preventa (POBs) = ?</p>
            <p className="ver">NORMAL (ver. Insatiability-Stability)</p>
            <p>-Photobook (cd+pb) = <span className="colordosa"> <span className="colorunoa">45usd</span> 40usd</span></p>
            <p>-Photocard =  <span className="colordosa"><span className="colorunoa">10usd</span> 10usd</span></p>
            <p>-Photocard transparente = <span className="colordosa"> <span className="colorunoa">5usd</span> 8usd</span></p>
            <p>-Poster = <span className="colordosa">5usd</span></p>
          </div>
       
          <img src="https://pbs.twimg.com/media/EfGbxXOWoAA1HYQ.jpg" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(12, 137, 112)" }}/>
        </div>
      </div>
      

  )
}

export default TEON;