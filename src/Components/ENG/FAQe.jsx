import { BsFillCollectionFill } from "react-icons/bs";
import "./Info.css"
import { RiSurveyLine } from "react-icons/ri";
import Button from "./Button";

const FAQe = ()=>{
    return(
        <div className="infoalbum">
            <h1 className="title">  FAQs</h1>
            <div className="infoal">
        <div className="infotext">
        <Button/>
        <p><a className='link' href="https://drive.google.com/drive/folders/1bSYCJtbrtS2vTd3IWCVSd10f0f0dFH8W?usp=sharing">
          <BsFillCollectionFill /> Photocard Templates 
          </a> </p>
            <div className="pregunta">
            <h3 className="preg">Why are there 2 different prices?</h3>
            <p className="res"> The blue price was set taking into account the whole album price (album + shipping + customs) divided by all the inclusions + prints available
                The green price is set by the prices used until now via Instagram or twitter selling. However, we noticed that sometimes the prices were too high to cover the whole album price with only the photocards, or to low due to people wanting to get rid of the inclusions when buying many albums.
               That is why, instead of only coming into an agreement of a price, we decided to give a range of prices to help sellers and buyers to have a better idea of the album's value.
            </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">There's an error / I want to suggest something</h3>
            <p className="res"> Please DM me at <a className="link" href="https://www.instagram.com/suikhan_/">@suikhan_</a>
            </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">How did you make the page?</h3>
            <p className="res"> It is 100% coded with Javascript (IT IS NOT A CARRD) <a className="link" href="https://github.com/camigarciam/cyv-dreamcatcher"> You can look at the code here (github)</a>
            </p>
            </div>
            <div className="pregunta">
            <h3 className="preg">I want to colaborate </h3>
            <p className="res"> A "Thank you" is more than enough, but you can support the page (and the cost of the url) by: <a className="link" href="https://www.paypal.me/CZGarciaM"> Paypal G&S</a>
            </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default FAQe;