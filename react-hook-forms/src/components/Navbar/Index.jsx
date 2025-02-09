import { NavLink, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav style={{display: 'flex', justifyContent: 'center', gap: 10}}>
      <NavLink style={{textDecoration:'none', color:'white'}} to="/">
        Home
      </NavLink>
      <NavLink style={{textDecoration:'none', color:'white'}} to="/posts" end>
        Posts
      </NavLink>
      <NavLink style={{textDecoration:'none', color:'white'}} to="/create-post" end>
        Create Post
      </NavLink>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;