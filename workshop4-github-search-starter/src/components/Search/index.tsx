import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import User from "../../types/user";

type Props = {
  onSetGithubUsers: (user: User[]) => void;
};

export default function Search(props: Props) {
  const { onSetGithubUsers } = props;
  const [user, setUser] = useState("");

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const search = async () => {
    if (!user.trim()) {
      return;
    } else {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${user}`
      );
      console.log(response.data);
      if (response.status === 200) {
        onSetGithubUsers(response.data.items);
      }
    }
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          onChange={changeInput}
        />
        &nbsp;<button onClick={search}>Search</button>
      </div>
    </section>
  );
}
