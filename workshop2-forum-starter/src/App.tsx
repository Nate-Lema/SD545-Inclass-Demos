import React, { MouseEvent, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import avatar from "./images/bozai.png";
import Item from "./App-Item";



interface User {
  uid: string;
  avatar: string;
  uname: string;
}

const user: User = {
  uid: "30009257",
  avatar: avatar,
  uname: "John",
};

interface Comment {
  rpid: string;
  user: User;
  content: string;
  ctime: string;
  like: number;
}
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const useGetList = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getList = async () => {
        const response = await fetch("http://localhost:3004/list");
        const data = await response.json();
        console.log(data);
        setComments(_.orderBy(data,'like','desc'))
      } 
    getList();
  }, []);

  return { comments, setComments };
};

const App = () => {
  const { comments, setComments } = useGetList();
  const [commentsCount, setCommentsCount] = useState<number>(comments.length);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const postHandler = (e: MouseEvent<HTMLDivElement>) => {
    const textArea = textAreaRef.current!;
    if (user.uid === "30009257" && textArea.value) {
      setCommentsCount(commentsCount + 1);
      setComments([
        ...comments,
        {
          rpid: uuidv4(),
          user: {
            uid: user.uid,
            avatar: user.avatar,
            uname: user.uname,
          },
          content: textArea.value,
          ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
          like: 0,
        },
      ]);
    }
    textArea.value = "";
    textArea.focus();
  };

  const [activeType, setActiveType] = useState<string>("hot");

  const handleTypeChange = (type: string) => {
    setActiveType(type);
    if (type === "hot") {
      setComments(_.orderBy(comments, "like", "desc"));
    } else {
      setComments(_.orderBy(comments, "ctime", "desc"));
    }
  };

  return (
    <div className="app">
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            <span className="total-reply">{commentsCount}</span>
          </li>
          <li className="nav-sort">
            {tabs.map((tab) => (
              <span
                key={tab.type}
                className={classnames("nav-item", { active: tab.type === activeType })}
                onClick={() => handleTypeChange(tab.type)}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>
      <div className="reply-wrap">
        <div className="box-normal">
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            <textarea
              ref={textAreaRef}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            <div className="reply-box-send">
              <div className="send-text" onClick={postHandler}>
                post
              </div>
            </div>
          </div>
        </div>
        <Item comments={comments} commentCount={commentsCount} />
      </div>
    </div>
  );
};

export default App;