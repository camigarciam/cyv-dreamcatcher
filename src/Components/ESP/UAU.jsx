import Button from "./Boton";
import "../Info.css"


const UAU= ()=>{
    return(
        <div className="UAU">
            <div className="infoalbum">
                <h1 className="title">#Playlist </h1>
                <div className="infoal">
                    <div className="infotext">
                        <Button />
                        <p>- POBs = desde <span className="colordosa"> 6 usd</span></p>
                        <p className="ver">LIMITED</p>
                            <p>- Limited photobook (cd+pb) = <span className="colorunoa">13usd</span> <span className="colordosa"> 10 usd</span></p>
                            <p>- Limited photocard = <span className="colorunoa">4usd</span> <span className="colordosa"> 8 usd</span></p>
                            <p>- 4 cut = <span className="colorunoa">2,5usd</span> <span className="colordosa"> 2 usd</span></p>
                            <p>- Stickers =  <span className="colorunoa">0.5usd</span> <span className="colordosa"> 2usd</span> each</p>
                            <p className="ver">JEWEL (P & L ver)</p>
                            <p>- Photobook (cd+pb) = <span className="colorunoa">8usd</span> <span className="colordosa"> 5 usd</span></p>
                            <p>- Photocard = <span className="colorunoa">3usd</span> <span className="colordosa"> 3 usd</span></p>
                            <p className="ver">POCA (A-Y-U)</p>
                            <p>- Pacakge + standee= <span className="colorunoa"> 4 usd</span><span className="colordosa"> 2usd</span> </p>
                            <p>- Photocard = <span className="colorunoa">4usd</span> <span className="colordosa"> 4 usd</span></p>
                            <p>- QR Photocard =<span className="colorunoa">4usd</span> <span className="colordosa"> 3 usd</span></p>
                            <p>- Stickers =  <span className="colorunoa">1usd</span> <span className="colordosa"> 0,5 usd</span></p>
                    </div>
                
                    <div className="infoalimg">
                    <img src="https://pbs.twimg.com/media/GsVD-BlXAAAmfVV.jpg" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(55, 146, 243)" }}/>
                     <img src="https://pbs.twimg.com/media/GtmK58da0AMsgB7.jpg" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(55, 146, 243)" }}/>
                    </div>
                </div>
            </div>

            <div className="infoalbum">
                <h1 className="title">#Playlist Tour 2025 </h1>
                <div className="infoal">
                    <div className="infotext">
                    
                            <p>-Photocard Set = <span className="colorunoa">20usd set</span> <span className="colordosa"> 5usd c/u</span></p>
                            <p>- Trading Cards = <span className="colorunoa">10usd set</span> <span className="colordosa"> 4usd c/u</span></p>
                    </div>
                
                    <div className="infoalimg">
                    <img src="https://preview.redd.it/uau-photocard-merch-v0-xn7adtigfdff1.jpeg?auto=webp&s=50a3bca77f2e14048d6177a1e16b27a2d8dd1e8c" alt="Album Cover"  style={{ boxShadow: "3.5px 3.5px 0px rgb(55, 146, 243)" }}/>
                     </div>
                </div>
            </div>



        </div>
    )      
}

export default UAU;