import { MouseEvent,useRef, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";
import AppCommentList from './App-Comments'
import AppHeader from "./App-Header";


 export interface Comment {
  rpid: number | string;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}

// Comment List data
const defaultList:Comment[] = [
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
  {
    rpid: 4,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content: "Follow Me",
    ctime: "10-18 09:00",
    like: 77,
  },
];
// current logged in user info
export const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

export type Props = {
  comments: Comment[];
  commentCount:number
};

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

  return (
    <div className="app">
     <AppHeader comments={comments} commentCount={commentsCount}/>
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
      <AppCommentList comments={comments} commentCount={commentsCount}/>
      </div>
    </div>
  );
};

export default App;
