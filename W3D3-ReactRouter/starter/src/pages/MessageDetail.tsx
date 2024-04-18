import { useParams } from "react-router-dom";

export default function MessageDetail() {
  const { id, title, content } = useParams();
  return (
    <div>
      <h4>Message Detail</h4>
      <ul>
        <li>Message ID: {id}</li>
        <li>Message Title: {title}</li>
        <li>Message content: {content}</li>
      </ul>
    </div>
  );
}
