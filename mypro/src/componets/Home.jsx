import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/Signup">Signup</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>
        <li></li>
      </ul>
    </div>
  );
}
