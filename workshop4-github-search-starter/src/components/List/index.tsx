import React from "react";
import "./index.css";
import User from "../../types/user";

type Props = {
  onGithubUsers: User[];
};

export default function List(props: Props) {
  const { onGithubUsers } = props;
  return (
    <div className="row">
      {onGithubUsers.map((githubUser: User) => (
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
  );
}
