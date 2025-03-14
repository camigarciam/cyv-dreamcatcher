import Button from "./Button";
import "../Info.css"

const ASUe = ()=>{
    return(
        <div className="infoalbum">
        <h1 className="title">APOCALYPSE: SAVE US</h1>
        <div className="infoal">
          <div className="infotext">
            <Button/>
            <p>- POBs =  desde <span className="colorunoa">8usd</span><span className="colordosa"> 8 usd</span> </p>
            <p className="ver">LIMITED (ver. S)</p>
            <p>- Limited photobook(cd+pb) =  <span className="colorunoa">11usd</span> <span className="colordosa"> 10 usd</span></p>
            <p>- Limited photocard = <span className="colorunoa"> 6 usd</span><span className="colordosa"> 10 usd</span></p>
            <p>- Holo postcard = <span className="colorunoa">0,75usd c/u</span> <span className="colordosa"> 5 usd set</span></p>
            <p>- Pop-up Card = <span className="colorunoa">1,75usd</span> <span className="colordosa"> 5 usd</span></p>
            <p>- Cupholder = <span className="colorunoa">0,8usd</span> <span className="colordosa"> 0,2 usd</span></p>
            <p>- Limited POB poster = <span className="colorunoa">1,5usd</span> <span className="colordosa"> 1 usd</span></p>
            <p className="ver">NORMAL (ver. A,V,E)</p>
            <p>- Photobook (cd+pb) =  <span className="colorunoa">7usd</span> <span className="colordosa"> 6 usd</span></p>
            <p>- Photocard = $300<span className="colorunoa">2,7usd</span> <span className="colordosa"> 2 usd</span> </p>
            <p>- Member solo card/ Solo CD = <span className="colorunoa">2usd</span> <span className="colordosa"> 3 usd</span></p>
            <p>- POB poster = <span className="colorunoa">1,25usd</span> <span className="colordosa"> 1 usd</span></p>
          </div>
          <img src="https://img.ws.mms.shopee.ph/15b02d308feab37d8ef7a0f4459b89f4" alt="Album Cover"style={{ boxShadow: "3.5px 3.5px 0px rgb(240, 203, 109)" }} />
          <img src="https://i.pinimg.com/736x/3a/c7/38/3ac7383d8e16e19eb2bc9b346ea8d245.jpg" alt="Album Cover"style={{ boxShadow: "3.5px 3.5px 0px rgb(240, 203, 109)" }} />
        </div>
      </div>
      )
}

export default ASUe;