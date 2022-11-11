import { Link }  from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The AMF Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '0.5em',
          }}
        >
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
