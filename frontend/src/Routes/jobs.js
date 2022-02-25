import React, { useEffect, useState } from "react";
import "../CSS/Routes/jobs.css";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

function Jobs() {

  const [apiData, setApiData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("http://project-udaan.herokuapp.com/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoad(false);
      });
  }, [])

  // search box functionality
  const [search, updateSearch] = useState("");

  function update(event) {
    updateSearch(event.target.value.toLowerCase());
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="jobBody"
    >
      <div className="jobHeading">
        <h1>GET. SET. FLY!</h1>
        <p>
          The oppurtunity has knocked the door.
          <br />
          Go ahead and explore it more.
        </p>
      </div>

      {/* search box */} 
      <div className="jobSearch">
        <div className="jobSearchOutline">
          <FaSearch className="jobSearchIcon" />
          <input
            type="text"
            placeholder="Enter job position"
            value={search}
            onChange={update}
          />
        </div>
      </div>

      {/* api cards */}
      <div className="jobCardContainer">
        {!load ? (
          apiData
            .filter((data) => {
              return data.post.toLowerCase().includes(search);
            })
            .map(
              (data) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="jobCardBody"
                >
                  <h1>{data.post}</h1>
                  <h3>{data.govtOrg}</h3>
                  <p>
                    <span className="jobCardSubtitle">Apply: </span>
                    {data.apply}
                  </p>
                  <p>
                    <span className="jobCardSubtitle">Age Limit: </span>
                    {data.ageLimit}
                  </p>
                  <p>
                    <span className="jobCardSubtitle">Pay Scale: </span>
                    {data.payScale}
                  </p>
                  <p>
                    <span className="jobCardSubtitle">Vacancies: </span>
                    {data.vacancies}
                  </p>
                  <p>
                    <span className="jobCardSubtitle">Last date: </span>
                    {data.lastDate}
                  </p>
                  <p>
                    <span className="jobCardSubtitle">Website: </span>
                    <a
                      href={data.website}
                      target="_blank"
                      className="jobRedirects"
                      rel="noreferrer"
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
    </motion.div>
  );
}

export default Jobs;