import { useSearchParams } from "react-router-dom";

export default function NewsDetailimport() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <h4>News Detail</h4>
      <ul>
        <li>News ID: {searchParams.get("id")}</li>
        <li>News Title: {searchParams.get("title")}</li>
        <li>News content: {searchParams.get("content")}</li>
      </ul>
    </div>
  );
}
