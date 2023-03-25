import circles from "./assets/loading/circles.svg";

const Loader = ({isloaded}) => {
    
  return (
    <div className={`overlay-loading ${!isloaded ? "" : "vanish"}`}>
        <img src={circles} alt="loading screen" />
    </div> 
  )
}


export default Loader;