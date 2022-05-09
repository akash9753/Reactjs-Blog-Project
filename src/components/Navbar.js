import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <div >
        <ul id="nav">
          {/* <li><Link to="/">Home</Link></li> */}
          <Link to='/'><li>Home</li></Link>
          <Link to="/create-post"><li>Create Post</li></Link>
          
        </ul>
      </div>
    );
  }
  
  export default Navbar;