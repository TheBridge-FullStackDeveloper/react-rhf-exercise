import { Link, Outlet } from "react-router";
import '../Style/NavBar.css'


const NavBar = () => {
  return (
    <>
    <div className="NavBar">
    <Link to={""}>
        <p>Index</p>
      </Link>
      <Link to={"posts"}>
        <p>Posts</p>
      </Link>
      <Link to={"create-post"}>
        <p>Crear post</p>
      </Link>
    </div>
    <Outlet />
    </>
  );
};

export default NavBar