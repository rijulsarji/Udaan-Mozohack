import React, { useEffect, useState } from "react";
import "../CSS/Components/aboutJobs.css"
import {MdArrowRight} from "react-icons/md";
import aboutJobsBox1 from "../assets/aboutJobsBox1.png"
import aboutJobsBox2 from "../assets/aboutJobsBox2.png"
import {Link} from "react-router-dom"

import aboutJobs from "../assets/aboutJobs.aac";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactHowler from "react-howler";

function AboutJobs() {

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
    <div className="aboutJobsBody" ref={ref}>
      <ReactHowler playing={play} src={[aboutJobs]} />
      <motion.div animate={animation} className="aboutJobsSubBody">
        {/* left side */}
        <div className="aboutJobsLS">
          <h1>GET. SET. FLY!</h1>
          <p>
            No amount of barriers can disable your abilities. Enable your
            abilities, come explore the world of job opportunities with Udaan
            and give your career the start which you always wanted to.
          </p>
          <Link to="/" className="aboutJobsDive">
            <p ref={audioRef}>DIVE IN</p>
            <MdArrowRight size={24} />
          </Link>
        </div>

        {/* right side */}
        <div className="aboutJobsRS">
          {/* LEFT BOX */}
          <div className="aboutJobsBox">
            <img src={aboutJobsBox1} alt="sports" />
            <h1>SPORTS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="aboutJobsBox">
            <img src={aboutJobsBox2} alt="sports" />
            <h1>JOBS</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutJobs;