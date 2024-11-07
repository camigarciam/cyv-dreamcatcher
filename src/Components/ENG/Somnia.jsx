import Button from "./Button";
import "../Info.css"
import UserForm from "./Collectorform";

const Somnia = ()=>{
    return(<div className="infoalbum">
    <h1 className="title">INSOMNIA COLLECTORS COMUNITY</h1>
    <div className="infoal">
      <div className="infotext">
        <Button/>
        <p className="ver">Welcome Dear Somnia Collector! This is a space for you to add you @, who you collect and whatever you want to add! The idea behind this is to get to know each other + help with our collections ^^</p>
      </div>
    </div>
    <div className="infoUser">
            <UserForm/>
    </div>
  </div>
  )
}

export default Somnia;