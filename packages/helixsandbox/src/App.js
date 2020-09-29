import React, { useState } from "react";
import Axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const players = ["Lebron", "Jokic", "Butler", "Murray", "Curry", "Lilard"];

function App() {
  //the data we receive from our express server
  const [nbaMVP, setnbaMVP] = useState(null);

  //get request to our express server, then once we get data in return, we setnbaMVP(with the response)
  const performHttpGet = () => {
    try {
      let num = Math.floor(Math.random() * Math.floor(5));
      var url = `/nba/${players[num]}`;

      return Axios.get(url).then((response) => {
        setnbaMVP(response.data);
      });
    } catch (e) {
      return console.log(e, "Error occured");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button
            style={{
              backgroundColor: "#61DAFB",
              color: "white",
              fontSize: "20px",
              width: "300px",
              height: "50px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={performHttpGet}
          >
            2020-2021 NBA MVP
          </button>
        </p>
        <div style={{ marginBottom: "100px", marginTop: "60px" }}>{nbaMVP}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
