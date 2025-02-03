import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f4f4f4' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/posts" style={{ margin: '10px' }}>Posts</Link>
      <Link to="/create-post" style={{ margin: '10px' }}>Create Post</Link>
    </nav>
  );
};

export default Navbar;
