import { useEffect, useState } from "react";
import _ from "lodash";
import "./App.scss";
import avatar from "./images/bozai.png";
import { Comment, Props } from "./App";

const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

export default function AppCommentList(props: Props) {
  const { comments, commentCount } = props;
  const [childCommentList, setChildCommentList] = useState<Comment[]>(
    _.orderBy(comments, "like", "desc")
  );
  const [commentsCount, setcommentsCount] = useState<number>(commentCount);

  useEffect(() => {
    setChildCommentList(comments);
    setcommentsCount(commentCount);
  }, [comments, commentCount]);

  const deleteComment = (rpid: number | string) => {
    setChildCommentList(childCommentList.filter((item) => item.rpid !== rpid));
    setcommentsCount(commentsCount - 1);
  };

  const likeHandler = (commentId: string | number) => {
    setChildCommentList((prevComments: Comment[]) => {
      return prevComments.map((comment) => {
        if (comment.rpid === commentId) {
          return { ...comment, like: comment.like + 1 };
        }
        return comment;
      });
    });
  };

  return (
    <>
      {/* comment list */}
      <div className="reply-list">
        {/* comment item */}
        {childCommentList.map((comment) => (
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
                      onClick={() => deleteComment(comment.rpid)}
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
    </>
  );
}
