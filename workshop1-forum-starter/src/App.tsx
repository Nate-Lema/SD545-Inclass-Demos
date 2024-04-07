import { MouseEvent, useRef, useState } from "react";
import classnames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";

type Comment = {
  rpid: string | number;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
};

// Comment List data
const defaultList: Comment[] = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: "",
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];
// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [comments, setComments] = useState(
    _.orderBy(defaultList, "like", "desc")
  );
  const [commentsCount, setcommentsCount] = useState<number>(comments.length);

  const textAreaRef = useRef(null);

  const postHandler = (e: MouseEvent<HTMLDivElement>) => {
    const textArea = textAreaRef.current! as HTMLInputElement;
    if (user.uid === "30009257" && textArea.value) {
      setcommentsCount(commentsCount + 1);
      setComments([
        ...comments,
        {
          rpid: uuidv4(),
          user: {
            uid: user.uid,
            avatar,
            uname: user.uname,
          },
          content: textArea.value,
          ctime: dayjs(Date.now()).format('MM-DD HH:mm'),
          like: 0,
        },
      ]);
    }
    textArea.value = "";
    textArea.focus();
  };

  const deleteCommentHandler = (rpid: number | string) => {
    setComments(comments.filter((item) => item.rpid !== rpid));
    setcommentsCount(commentsCount - 1);
  };

  const [activeType, setActiveType] = useState("hot");

  const handleTypeChange = (type: string) => {
    setActiveType(type);

    if (type === "hot") {
      setComments(_.orderBy(comments, "like", "desc"));
    } else {
      setComments(_.orderBy(comments, "ctime", "desc"));
    }
  };

  const likeHandler = (commentId: string | number) => {
    setComments((prevComments: Comment[]) => {
      return prevComments.map((comment) => {
        if (comment.rpid === commentId) {
          return { ...comment, like: comment.like + 1 };
        }
        return comment;
      });
    });
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{commentsCount}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              <span
                key={tab.type}
                // className={`nav-item ${activeType === tab.type && 'active'}`}
                className={classnames("nav-item", {
                  active: tab.type === activeType,
                })}
                onClick={() => handleTypeChange(tab.type)}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              ref={textAreaRef}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text" onClick={postHandler}>
                post
              </div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          {comments.map((comment) => (
            <div className="reply-item" key={comment.rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    src={comment.user.avatar}
                    alt=""
                  />
                </div>
              </div>

              <div className="content-wrap">
                {/* username */}
                <div className="user-info">
                  <div className="user-name">{comment.user.uname}</div>
                </div>
                {/* comment content */}
                <div className="root-reply">
                  <span className="reply-content">{comment.content}</span>
                  <div className="reply-info">
                    {/* comment created time */}
                    <span className="reply-time">{comment.ctime}</span>
                    {/* total likes */}
                    <span
                      className="reply-time"
                      onClick={() => likeHandler(comment.rpid)}
                    >
                      Like:{comment.like}
                    </span>

                    {comment.user.uid === user.uid && (
                      <span
                        className="delete-btn"
                        onClick={() => deleteCommentHandler(comment.rpid)}
                      >
                        Delete
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
