import { Link } from 'react-router-dom';

const Navbar = () => (
<nav className="bg-gray-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
        <div className="flex space-x-8">
        <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
        </Link>
        <Link to="/posts" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Posts List
        </Link>
        <Link to="/create-post" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Create Post
        </Link>
        </div>
    </div>
    </div>
</nav>
);

export default Navbar;
