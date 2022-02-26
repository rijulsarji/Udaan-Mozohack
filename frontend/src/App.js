import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import "./App.css"

// file imports
import Home from "./Routes/home";
import Jobs from "./Routes/jobs";
import Scholarships from "./Routes/scholarships";
import Heroes from "./Routes/heroes";
import { recognition } from "./api/voiceRecognition";
import { useEffect, useState } from "react";

function App() {

  const [sessVar, setSessVar] = useState(false);
  const [blind, setBlind] = useState(false);
  setInterval(() => {
    setSessVar(window.sessionStorage.getItem("blind"));
  }, 1000);

  useEffect(() => {
    if (sessVar === "true") setBlind(true);
    else setBlind(false);
  }, [sessVar]);

  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch("https://project-udaan.herokuapp.com/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setLoad(false);
      });
  }, [])

  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    if(!blind) {
      try {
        recognition.start();
        setCount(1);
      }
      catch {
        recognition.stop();
        setCount(0);
      }
    }
    else {
      recognition.stop();
      setCount(0);
    }
  }, [sessVar])

  // if(blind) {
    recognition.onend = () => {
      if(count === 1)
        recognition.start();
      else
        recognition.stop();
    }
  // }

  // if(blind) {
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;

      if(command.includes("navigate to") || command.includes("go to")) {
        if(command.includes("home") || command.includes("index"))
          navigate("/");
        if (command.includes("jobs"))
          navigate("/jobs");
        if (command.includes("scholarships"))
          navigate("/scholarships");
        if (command.includes("heroes"))
          navigate("/");
      }
      if(command.includes("stop")) {
        recognition.stop();
        setCount(0);
      }
    };
  // }
  
  return (
    <div className="body">
      {/* <Router> */}
        <Navbar />
        {load ? <h3 style={{marginTop: 150}}>Loading...</h3> :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/heroes" element={<Heroes />} />
          </Routes>
        }
      {/* </Router> */}
    </div>
  );
}

export default App;
