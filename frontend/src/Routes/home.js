import React, { useEffect, useState } from "react";
import "../CSS/Routes/home.css";
import { motion } from "framer-motion"
import landingGif from "../assets/landingVideo.gif";

import { useInView } from "react-intersection-observer";

import ReactHowler from "react-howler";

import landingPage from "../assets/landingPage.aac";

// component imports
import AboutUdaan from "../Components/aboutUdaan";
import AboutJobs from "../Components/aboutJobs";
import AboutScholar from "../Components/aboutScholar";
import NGOsection from "../Components/ngoSection";
import Footer from "../Components/footer";

function Home() {

  const [sessVar, setSessVar] = useState(false);
  const [blind, setBlind] = useState(false);
  setInterval(() => {
    setSessVar(window.sessionStorage.getItem("blind"));
  }, 1000);

  useEffect(() => {
    if (sessVar === "true") setBlind(true);
    else setBlind(false);
  }, [sessVar]);

  const {ref, inView } = useInView({initialInView: true});

  const [play, setPlay] = useState(false)

  useEffect(() => {
    if(inView && blind)
      setPlay(true)
    else
      setPlay(false)
  }, [inView])


  // const sound = new Howl ({
  //   src: landingPage
  // })

  // if(inView)
  //   sound.play();
  // if(!inView)
  //   sound.stop()

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="homeBody">

      <ReactHowler playing={play} src={[landingPage]} />
      {/* sub body */}
      <div className="homeSubBody" ref={ref}>
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: 1}}
          className="homeLeft">
          <p className="homeTopLeft">
            "You are equally <span className="disableText"><span className="disText">dis</span>ABLE</span>"
            <br />
            Giving wings to your dreams.
          </p>
        </motion.div>

        <motion.div 
          className="homeRight"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.5}}
        >
          {/* insert video here */}
          {/* <video src={landingVideo} autoPlay loop muted className="landingVideo" /> */}
          <img src={landingGif} className="landingVideo" alt="kids gif"/>
        </motion.div>
      </div>
      {/* sub body ends */}

      {/* about udaan */}
      <AboutUdaan />

      {/* about jobs */}
      <AboutJobs />

      {/* about scholarships */}
      <AboutScholar />

      {/* NGO section */}
      <NGOsection />

      {/* footer */}
      <Footer />

    </motion.div>
  )
}

export default Home;