import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import { GrTest } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar2.css'
//import Login from './Login';

function Navbar() {
  // const [modal,setModal]= useState(false);
  // const handleLoginForm = () =>
  // {
  //     setModal(!modal)
  // }
    const navigate = useNavigate(); // Initialize navigation function
  return (
    <div>
      {/* {modal && <LoginForm handleLoginForm={handleLoginForm}/>} */}
       {/* Navbar Start */}
       <nav className="navbar navbar-dark bg-dark d-flex justify-content-between px-3 fixed-top">
        <span className="navbar-brand mb-0 h1 text-white">
          Career Guidance Platform
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div className="collapse bg-dark p-4 mt-5" id="navbarToggleExternalContent">
        <Link to="/" className="d-block text-white" style={{textDecoration:'none'}}><IoHome className='iconsnav' /> Home</Link>
        <Link to="/About" className="d-block text-white" style={{textDecoration:'none'}}><FaPeopleRoof className='iconsnav'  /> About</Link>
        <Link to="/services" className="d-block text-white" style={{textDecoration:'none'}}><RiHandCoinFill className='iconsnav'  /> Service</Link>
        <Link to="/CareerTest" className="d-block text-white" style={{textDecoration:'none'}}><GrTest className='iconsnav'  /> Take Career Test</Link>
        <Link to="/contact" className="d-block text-white" style={{textDecoration:'none'}}><MdEmail className='iconsnav'  /> Contact</Link> <br/>
       
        <div>
        {/* onClick={handleLoginForm} */}
        {/* onClick={() => navigate('/LoginForm')} style={{ cursor: 'pointer' }}  */}
          <button className="btn btn-primary me-2"  onClick={() => navigate('/Login')} style={{ cursor: 'pointer' }}>LOGIN</button>
          <button className="btn btn-success" onClick={() => navigate('/Signup')} style={{ cursor: 'pointer' }}>SIGNUP</button>
        </div>
        <span className="text-muted">Sign In </span>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default Navbar;
