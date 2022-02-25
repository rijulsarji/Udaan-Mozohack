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

  const [load, setLoad] = useState(true);
  fetch("https://project-udaan.herokuapp.com/api/jobs")
    .then((response) => response.json())
    .then((data) => {
      setLoad(false);
    });

  const navigate = useNavigate();
  useEffect(() => {
    recognition.start();
  }, [])

  recognition.onend = () => {
    recognition.start();
  }

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
        navigate("/heroes");

      }
  };

  console.log(recognition);
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
