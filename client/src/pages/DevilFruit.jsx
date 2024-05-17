import React, { useState, useEffect } from "react";

function DevilFruit() {
  const [logias, setLogias] = useState([]);
  const [zoans, setZoans] = useState([]);
  const [paramecias, setParamecias] = useState([]);

  // Logia fetch
  useEffect(() => {
    async function fetchLogias() {
      try {
        const response = await fetch("http://localhost:3000/logia");
        const data = await response.json();
        setLogias(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchLogias();
  }, []);

  // Zoan fetch
  useEffect(() => {
    async function fetchZoans() {
      try {
        const response = await fetch("http://localhost:3001/zoan");
        const data = await response.json();
        setZoans(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchZoans();
  }, []);

  // Paramecia fetch
  useEffect(() => {
    async function fetchParamecias() {
      try {
        const response = await fetch("http://localhost:3002/paramecia");
        const data = await response.json();
        setParamecias(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchParamecias();
  }, []);

  return (
    <>
      {/* Logia map */}
      <h1>Logia</h1>
      <div
        className="container"
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "hidden",
        }}
      >
        {logias.map((logia) => (
          <div
            key={logia.id}
            style={{
              border: "1px solid white",
              margin: "10px",
              borderRadius: "50px",
              backgroundColor: "black",
            }}
          >
            <h3>Japanese Name: {logia.jpName}</h3>
            <h3>English Name: {logia.enName}</h3>
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
              <img src={logia.currentUser.image} alt={logia.currentUser.name}/>
            </div>
            <div>
              <h3>Past User: {logia.pastUser.name}</h3>
              <img src={logia.pastUser.image} alt={logia.pastUser.name}/>
              <p>Devil Fruit ability: {logia.ability}</p>
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

      {/* Zoan map */}
      <h1>Zoan</h1>
      <div
        className="container"
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "hidden",
        }}
      >
        {zoans.map((zoan) => (
          <div
            key={zoan.id}
            style={{
              border: "1px solid white",
              margin: "5px",
              borderRadius: "50px",
              backgroundColor: "black",
            }}
          >
            <h3>Japanese Name: {zoan.jpName}</h3>
            <h3>English Name: {zoan.enName}</h3>
            <img
              style={{ height: "350px", width: "100%" }}
              className="zoan-images"
              src={zoan.image}
              alt={zoan.enName}
              // onError run the fallback image when the default image doesn't load
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./public/Devil_Fruit.jpg";
              }}
            />
            <div>
              <h3>Current User: {zoan.currentUser.name}</h3>
              <h3>{zoan.currentUser.image}</h3>
            </div>
            <div>
              <h3>Past User: {zoan.pastUser.name}</h3>
              <h3>{zoan.pastUser.image}</h3>
              <p>Devil Fruit ability: {zoan.ability}</p>
              <div>
                {zoan.isAwakened ? (
                  <p style={{ color: "green" }}>This fruit is awakened!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not awakened.</p>
                )}
                {zoan.isMythical ? (
                  <p style={{ color: "green" }}>This fruit is mythical!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not mythical.</p>
                )}
                {zoan.isAncient ? (
                  <p style={{ color: "green" }}>This fruit is ancient!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not ancient.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paramecia map */}
      <h1>Paramecia</h1>
      <div
        className="container"
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "hidden"
        }}
      >
        {paramecias.map((paramecia) => (
          <div key={paramecia.id} style={{ border: "1px solid white", margin: "5px", borderRadius: "50px", backgroundColor: "black"}}>
            <h3>Japanese Name: {paramecia.jpName}</h3>
            <h3>English Name: {paramecia.enName}</h3>
            <img
              style={{ height: "350px", width: "100%" }}
              className="paramecia-images"
              src={paramecia.image}
              alt={paramecia.enName}
              // onError run the fallback image when the default image doesn't load
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./public/Devil_Fruit.jpg";
              }}
            />
            <div>
              <h3>Current User: {paramecia.currentUser.name}</h3>
              <h3>{paramecia.currentUser.image}</h3>
            </div>
            <div>
              <h3>Past User: {paramecia.pastUser.name}</h3>
              <h3>{paramecia.pastUser.image}</h3>
              <p>Devil Fruit ability: {paramecia.ability}</p>
              <div>
                {paramecia.isAwakened ? (
                  <p style={{ color: "green" }}>This fruit is awakened!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not awakened.</p>
                )}
                {paramecia.isMythical ? (
                  <p style={{ color: "green" }}>This fruit is mythical!</p>
                ) : (
                  <p style={{ color: "red" }}>This fruit is not mythical.</p>
                )}
                {paramecia.isAncient ? (
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
