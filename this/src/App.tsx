import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
// import "./bootstrap.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

 useEffect(()=>{
   const getUser = async () => {
     const response = await axios.get(
       "https://api.github.com/search/users?q=" + user
     );
     console.log(response.data);
    //  if (response.status === 200) {
    //    setUser(response.data);
    //  }
   };
   getUser()
 },[user])

  return (
    <div id="app">
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              onChange={changeInput}
            />
            &nbsp;<button>Search</button>
          </div>
        </section>
        <div className="row">
          <div className="card">
            <a
              href="https://github.com/reactjs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/6412038?v=3"
                style={{ width: "100px" }}
                alt=""
              />
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a
              href="https://github.com/reactjs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/6412038?v=3"
                style={{ width: "100px" }}
                alt=""
              />
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a
              href="https://github.com/reactjs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/6412038?v=3"
                style={{ width: "100px" }}
                alt=""
              />
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a
              href="https://github.com/reactjs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/6412038?v=3"
                style={{ width: "100px" }}
                alt=""
              />
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a
              href="https://github.com/reactjs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/6412038?v=3"
                style={{ width: "100px" }}
                alt=""
              />
            </a>
            <p className="card-text">reactjs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
