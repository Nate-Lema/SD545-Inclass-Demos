import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import "./index.css";
import User from "../../types/user";
import SearchResponse from "../../types/searchRespnse";

export default function List() {
  const [githubUsers, setGithubUsers] = useState<SearchResponse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: [],
  });
  const { isFirst, isLoading, isError, users } = githubUsers;

  useEffect(() => {
    const token = PubSub.subscribe("sd545", (msg, data) => {
      setGithubUsers(data);
    });
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);
  return (
    <div>
      {isFirst ? (
        <h2>Please Enter keyword to start</h2>
      ) : isLoading ? (
        <h2>Please wait</h2>
      ) : isError ? (
        <h2>Whoops! Try later</h2>
      ) : (
        <div className="row">
          {users.map((githubUser: User) => (
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
      )}
    </div>
  );
}
