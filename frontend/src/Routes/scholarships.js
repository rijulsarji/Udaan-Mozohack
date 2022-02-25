import React, { useEffect, useState } from "react";
import "../CSS/Routes/scholarships.css";
import { FaSearch } from "react-icons/fa";
import {motion} from "framer-motion";

import aboutScholarCap from "../assets/aboutScholarCap.png";

function Scholarships() {

  const [apiData, setApiData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("http://project-udaan.herokuapp.com/api/scholarships")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoad(false);
      });
  }, [])

  if(!load)
    console.log(apiData);

  // search box functionality
  const [search, updateSearch] = useState("");

  function update(event) {
    updateSearch(event.target.value.toLowerCase());
  }

  return (
    <div className="scholarshipBody">
      
      <div className="scholarshipHeading">
        <h1>
          FUEL YOUR WINGS
        </h1>
        <p>
          Learning is a process.
          <br />
          Go ahead and explore it more.
        </p>
      </div>

      {/* search box */}
      <div className="scholarshipSearch">
        <div className="scholarshipSearchOutline">
          <FaSearch className="scholarshipSearchIcon" />
          <input
            type="text"
            placeholder="Enter your search"
            value={search}
            onChange={update} 
          />
        </div>
      </div>

      {/* api cards */}
      <div className="scholarshipCardContainer">
        {!load ? (
          apiData
            .filter((data) => {
              return data.title.toLowerCase().includes(search);
            })
            .map(
              (data) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="scholarshipCardBody"
                >
                  <img src={aboutScholarCap} alt="cap" />
                  <h1>{data.title}</h1>
                  <h3>{data.eligibility}</h3>
                  <p>
                    <span className="scholarshipCardSubtitle">
                      Description:{" "}
                    </span>
                    {data.description}
                  </p>
                  <p>
                    <span className="scholarshipCardSubtitle">Benefits: </span>
                    {data.benefits}
                  </p>
                  <p>
                    <span className="scholarshipCardSubtitle">Contact: </span>
                    {data.contact}
                  </p>
                  <p>
                    <span className="scholarshipCardSubtitle">Website: </span>
                    <a
                      href={data.website}
                      target="_blank"
                      rel="noreferrer "
                      className="scholarshipRedirects"
                    >
                      {data.website}
                    </a>
                  </p>
                </motion.div>
              )

              // loading component
            )
        ) : (
          <p className="jobLoading">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Scholarships;