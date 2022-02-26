import React, { useEffect, useState } from "react";

function HeroPage() {

  const [dataApi, setDataApi] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("http://project-udaan.herokuapp.com/api/heroes")
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data);
        setLoad(false);
      });
  })

  return (
    <div>
      { !load ? dataApi.map(data => (<img src={data.image} />))
      : <p>Loading...</p>
      }
    </div>
  )
}

export default HeroPage;