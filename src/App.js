import React, { useState } from "react";

import data from "./data";
import List from "./components/List";

import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  const [myArr, setMyArr] = useState([1, 2, 3]);
  // const myArr1 = [1, 2, 3];

  const changingPeopleArr = () => {
    // myArr1.push(4);
    setMyArr([...myArr, 4]);
    console.log(myArr);
  };

  // const changingPeopleArr = () => {
  //   setPeople([]);
  // };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* <List people={people} /> */}
        {myArr.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        })}
        <button onClick={changingPeopleArr}>Add 4</button>
      </section>
    </main>
  );
}

export default App;
