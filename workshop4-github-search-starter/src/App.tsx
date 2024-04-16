import React, { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
import User from "./types/user";

function App() {
  const [githubUsers, setGithubUsers] = useState<User[]>([]);

  return (
    <div id="app">
      <div className="container">
        <Search onSetGithubUsers={setGithubUsers} />
        <List onGithubUsers={githubUsers} />
      </div>
    </div>
  );
}

export default App;
