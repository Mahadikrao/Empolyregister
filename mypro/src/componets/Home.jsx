import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <ul>
        <li>
        
          <Link to="/">Home</Link>{" "}
        </li>
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
        <li>
          {" "}
          <Link to="/contact">contact</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
