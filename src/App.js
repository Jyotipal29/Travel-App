import React, { useState } from "react";
import { database } from "./database.js";
import "./styles.css";

const dbArray = Object.keys(database);
export default function App() {
  const [selectPlace, setSelectPlace] = useState("Beach");
  function placeClickHandler(place) {
    setSelectPlace(place);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron jumbotron-img">
          <div className="Header">
            <h1>Bucket List</h1>
          </div>
          <h3>
            checkout my favorite Destination(in india). select a gener to get
            started
          </h3>
          {dbArray.map(function (place) {
            return (
              <span
                className="placeClass"
                onClick={() => placeClickHandler(place)}
              >
                {place}
              </span>
            );
          })}
        </div>
        {database[selectPlace] &&
          database[selectPlace].map((place, index) => {
            return (
              <div key={index}>
                <div className="box">
                  <img src={place.poster} className="poster"></img>
                  <div className="content">
                    <h2 className="title">{place.title}</h2>
                    <p className="description">
                      Description: {place.description}
                    </p>
                    <h2 className="goodTime">
                      Best time to go :{place.goodTime}
                    </h2>
                    <h2 className="plan"> Things to do :{place.plan}</h2>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
