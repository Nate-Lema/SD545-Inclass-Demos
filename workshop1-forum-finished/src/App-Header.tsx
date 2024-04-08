// import { useState } from "react";
import classnames from "classnames";
import _ from "lodash";

import "./App.scss";
import { useEffect, useState } from "react";
import { Comment, Props } from "./App";

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

export default function AppHeader(props: Props) {
  const { comments, commentCount } = props;
  const [childCommentList, setChildCommentList] = useState<Comment[]>(comments);
  const [commentsCount, setcommentsCount] = useState<number>(commentCount);

  useEffect(() => {
    setChildCommentList(comments);
    setcommentsCount(commentCount);
  }, [comments, commentCount]);
  const [activeType, setActiveType] = useState("hot");

  const handleTypeChange = (type: string) => {
    setActiveType(type);

    if (type === "hot") {
      setChildCommentList(_.orderBy(childCommentList, "like", "desc"));
    } else {
      setChildCommentList(_.orderBy(childCommentList, "ctime", "desc"));
    }
  };

  return (
    <>
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
    </>
  );
}
