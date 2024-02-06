import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <ul >
        <li style={{listStyleType: 'none'}}>
          <Link to="/" style={{color: '#fff'}}>
            🏡 Home Page 🏡
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
