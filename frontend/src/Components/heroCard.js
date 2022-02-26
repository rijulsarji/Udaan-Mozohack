import React, { useState } from "react";
import "../CSS/Components/heroCard.css";

function HeroCard() {
  const [dataApi, setDataApi] = useState([]);
  const [load, setLoad] = useState(true);

  fetch("https://project-udaan.herokuapp.com/api/heroes")
    .then((response) => response.json())
    .then((data) => {
      setDataApi(data);
      setLoad(false);
    });

  return (
    <>
      <section id="marquee" loop={true}>
        {!load ? (
          <div loop={true} className="heroCardContainer">
            <div loop={true} className="heroCardPicContainer">
              {dataApi.map((data) => (
                <div className="heroPic" style={{ paddingTop: data.padding }}>
                  <img src={data.image} alt="image" />
                </div>
              ))}
              {dataApi.map((data) => (
                <div className="heroPic" style={{ paddingTop: data.padding }}>
                  <img src={data.image} alt="image" />
                </div>
              ))}
              {dataApi.map((data) => (
                <div className="heroPic" style={{ paddingTop: data.padding }}>
                  <img src={data.image} alt="image" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </section>
    </>
  );
}

export default HeroCard;
