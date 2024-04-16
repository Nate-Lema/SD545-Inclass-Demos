import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

function App() {
  const [user, setUser] = useState("");
  const [githubUsers, setGithubUsers] = useState<User[]>([]);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  useEffect(() => {
    const getUser = async () => {
      if (!user.trim()) {
        return;
      } else {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${user}`
        );
        console.log(response.data);
        if (response.status === 200) {
          setGithubUsers(response.data.items);
        }
      }
    };

    getUser();
  }, [user]);

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
          {githubUsers.map((githubUser: User) => (
            <div className="card" key={githubUser.id}>
              <a href={githubUser.html_url} target="_blank" rel="noreferrer">
                <img
                  src={githubUser.avatar_url}
                  style={{ width: "100px" }}
                  alt={githubUser.login}
                />
              </a>
              <p className="card-text">{githubUser.login}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
