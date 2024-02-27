import { Link } from "react-router-dom";

const linkStyle = {
  color: "#1746A2",
};

export default function HomePage() {
  return (
    <div>
      <h1>Top TV</h1>

      <em>All about the smaller silver screen</em>
      <ul>
        <li>
          <Link to="/shows" style={linkStyle}>
            Explore Shows
          </Link>
        </li>
        <li>
          <Link to="/search" style={linkStyle}>
            Search your favourite Shows
          </Link>
        </li>
      </ul>
    </div>
  );
}
