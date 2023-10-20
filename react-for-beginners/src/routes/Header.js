import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <div
        style={{
          height: "50px",
          backgroundColor: "lightgray",
          marginBottom: "16px",
          lineHeight: 3,
          padding: "10px",
        }}
      >
        <Link to="/">Home</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Header;
