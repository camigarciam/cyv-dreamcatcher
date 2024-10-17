import Button from "./Button";
import "../Info.css"

const TTOLe= ()=>{
    return(
        <div className="infoalbum">
        <h1 className="title">DYSTOPIA: THE TREE OF LANGUAGE</h1>
        <div className="infoal">
          <div className="infotext">
            <Button/>
            <p>-POBs = <span className="colorunoa">18usd (base)</span> <span className="colordosa"> 25 usd</span></p>
            <p>- POB poster= <span className="colorunoa">2usd</span> <span className="colordosa"> 5 usd</span></p>
            <p className="ver">NORMAL (ver. E,V,I,L)</p>
            <p>- Photobook (cd+pb) = <span className="colorunoa">20usd</span> <span className="colordosa"> 30 usd</span></p>
            <p>- Photocard =<span className="colorunoa">7usd</span> <span className="colordosa"> 6 usd</span></p>
          </div>
          <img src="https://d3tvwjfge35btc.cloudfront.net/Assets/GalleryImage/46/429/L_g0122942946.jpg" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(87, 53, 3)" }}/>
          <img src="https://external-preview.redd.it/hlei0JWh82oDzsSaUcnEchTdHHLK2NnWSMESuxE9RfI.jpg?auto=webp&s=e0503739a48a8bcbbd4e3489c8dd4798010111c8" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(87, 53, 3)" }}/>
        </div>
      </div>
    )      
}

export default TTOLe;