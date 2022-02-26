import React, { useEffect, useState } from "react";
import "../CSS/Components/aboutScholar.css"
import { MdArrowLeft } from "react-icons/md";
import aboutScholarCap from "../assets/aboutScholarCap.png";
import {Link} from "react-router-dom";

import aboutScholars from "../assets/aboutScholars.aac";

import homeScholar1 from "../assets/homeScholar1.png";
import homeScholar2 from "../assets/homeScholar2.png";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactHowler from "react-howler";

function AboutScholar() {

  const [sessVar, setSessVar] = useState(false);
  const [blind, setBlind] = useState(false);
  setInterval(() => {
    setSessVar(window.sessionStorage.getItem("blind"));
  }, 1000);

  useEffect(() => {
    if (sessVar === "true") setBlind(true);
    else setBlind(false);
  }, [sessVar]);

  const { ref, inView } = useInView();
  const animation = useAnimation();

  const { ref: audioRef, inView: audioInView } = useInView();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (audioInView && blind) setPlay(true);
    else setPlay(false);
  }, [audioInView]);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="aboutScholarBody" ref={ref}>
      <ReactHowler playing={play} src={[aboutScholars]} />
      <motion.div animate={animation} className="aboutScholarSubBody">
        {/* left side */}
        <div className="aboutScholarLS">
          {/* left box */}
          <div className="aboutScholarBox">
            <img src={aboutScholarCap} className="aboutScholarCap" alt="scholar cap"/>
            <img src={homeScholar1} className="aboutScholarImg"/>
          </div>

          {/* right box */}
          <div className="aboutScholarBox">
            <img src={aboutScholarCap} className="aboutScholarCap" alt="scholar cap"/>
            <img src={homeScholar2} className="aboutScholarImg"/>
          </div>
        </div>

        {/* right side */}
        <div className="aboutScholarRS">
          <h1>FUEL YOUR WINGS</h1>
          <p>
            Zeal to achieve your dreams, automatically opens the path to
            opportunities. Let no materialistic hurdle like money stop you from
            scaling your success. Filter out the best suitable scholarship
            options to fuel up your wings and prepare you for your highest
            flight.
          </p>
          <Link to="/" className="aboutScholarGrab">
            <MdArrowLeft size={24} />
            <p ref={audioRef}>GRAB ONE</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutScholar;