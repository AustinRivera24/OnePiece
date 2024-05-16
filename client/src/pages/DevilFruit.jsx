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
      <div
        className="container"
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "hidden"
        }}
      >
        {logias.map((logia) => (
          <div key={logia.id} style={{ border: "1px solid white", margin:"5px", borderRadius:"50px", backgroundColor:"black"}}>
            <h3>Japense Name: {logia.jpName}</h3>
            <h3>Japense Name: {logia.enName}</h3>
            <img
              style={{ height: "400px", width: "100%" }}
              className="logia-images"
              src={logia.image}
              alt={logia.enName}
              // onError run the fallback image when the default image doesn't load
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./public/Devil_Fruit.jpg";
              }}
            />
            <div>
              <h3>Current User: {logia.currentUser.name}</h3>
              <h3>{logia.currentUser.image}</h3>
            </div>
            <div>
              <h3>Past User: {logia.pastUser.name}</h3>
              <h3>{logia.pastUser.image}</h3>
              <p>{logia.ability}</p>
              <div>
                {logia.isAwakened ? (
                  <p style={{ color: "green" }}>This fruit is awakened!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not awakened.</p>
                )}
                {logia.isMythical ? (
                  <p style={{ color: "green" }}>This fruit is mythical!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not mythical.</p>
                )}
                {logia.isAncient ? (
                  <p style={{ color: "green" }}>This fruit is ancient!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not ancient.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DevilFruit;
