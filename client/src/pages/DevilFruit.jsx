import React, { useState, useEffect } from "react";

function DevilFruit() {
  const [logias, setLogia] = useState([]);

  useEffect(() => {
    async function fetchLogias() {
      try {
        const response = await fetch("http://localhost:3000/logia");
        const data = await response.json();
        setLogia(data);
      } catch (error) {
        console.error("Error fetching data", error);
        throw error;
      }
    }
    fetchLogias();
  }, []);

  return (
    <>
    <h1>Logia</h1>
      <div className="container" style={{height:"100%", display:"grid", gridTemplateColumns: "repeat(3, 1fr)", overflow:"hidden"}}>
        
        {logias.map((logia) => (
          <div key={logia.id} style={{border:"1pc solid red"}}>
            <h3>Japense Name: {logia.jpName}</h3>
            <h3>Japense Name: {logia.enName}</h3>
            <img
                    style={{height:"400px", width:"100%"}}
                        className="logia-images"
                        src={logia.image}
                        alt={logia.enName}
                        // onError run the fallback image when the default image doesn't load
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "./public/confused_luffy.jpg";
                        }}
                    />
          </div>
        ))}
      </div>
    </>
  );
}

export default DevilFruit;
