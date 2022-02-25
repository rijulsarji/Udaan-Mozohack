import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
import "../CSS/Routes/hero.css";
// import "./styles.css";

import HeroStory from "../Components/heroStory";
import HeroCard from "../Components/heroCard";

function Heroes() {
    
    return(
        <>  
        <div className="heroBody">
        <h1 className="heroCardHeading">Mission passed, Respect++</h1>
        <h4 className="heroCardDescription">Not one, not two, not three. We have multiple heroes and they have never failed to inspire us.</h4>
        <HeroCard />
        <h2 className="heroStoryHeading">Our heroes made their flight <span className="highlight">without wings!</span></h2>
        <HeroStory />
        </div>
        </>
    )
}

export default Heroes;