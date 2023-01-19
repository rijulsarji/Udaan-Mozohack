import React, { useEffect, useState } from "react";

function HeroPage() {

  const [dataApi, setDataApi] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://project-udaan-backend.onrender.com/api/heroes")
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