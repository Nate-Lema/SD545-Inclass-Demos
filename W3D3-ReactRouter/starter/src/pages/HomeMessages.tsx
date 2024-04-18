import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function HomeMessages() {
  const [messages, setMessages] = useState([
    { id: 1, title: "Message 1", content: "Content of Message 1" },
    { id: 2, title: "Message 2", content: "Content of Message 2" },
    { id: 3, title: "Message 3", content: "Content of Message 3" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Link to={`detail/${message.id}/${message.title}/${message.title}`}>
              {message.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
