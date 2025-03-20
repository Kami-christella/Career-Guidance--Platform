import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import { GrTest } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar2.css'

function Navbar2() {
    const navigate = useNavigate(); 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"> Career Guidance</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto"> {/* Changed from mr-auto to me-auto for Bootstrap 5 */}
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="visually-hidden">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/CareerTest">Career Test</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <div className='buttonClass'>
                        <button type="button" className="btn btn-success" onClick={() => navigate('/Login')}>LogIn</button>
                        <button type="button" className="btn btn-light" onClick={() => navigate('/Signup')}>SignUp</button>
                       
                        </div>
                   
                        {/* Navbar text with an inline element */}
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar2;
