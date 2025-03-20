import { useState } from "react";
import { IoPersonCircle, IoHomeOutline, IoSettings } from "react-icons/io5";
import { GrTest } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import "./Dashboard_Styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="allClassesb">
      {/* Left Sidebar */}
      <div className="leftClassb">
        <div className="headerOfIconsb">
          <div className="loginheaderb">Career Guidance Platform</div>
        </div>
        <hr />

        <div className="ActiveNavContainer">
          <div className="divClassb">
            <IoHomeOutline />
            <span className="sidei"> Dashboard</span>
          </div>
        </div>

        <div className="divClassb" onClick={() => navigate('/dashboard/Career-test')}>
          <GrTest /> <span className="sidei"> Career Guidance Tests</span>
        </div>
        <div className="divClassb" onClick={() => navigate("/")}>
          <LuNotebookPen /> <span className="sidei"> Results</span>
        </div>
        <div className="divClassb" onClick={() => navigate("/Settings")}>
          <IoSettings /><span className="sidei"> Settings</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="allRightSide">
        <div className="rightClassb">
          <div className="firstRow">
            <div className="platformHeaderb">Welcome,</div>
            <div className="myName">Christella</div>

            {/* Profile Icon & Dropdown */}
            <div className="profile-container">
              <IoPersonCircle 
                className="personicon" 
                onClick={() => setShowDropdown(!showDropdown)}
              />
              
              {/* Always Render the Dropdown, Toggle Visibility */}
              <div className={`profile-dropdown ${showDropdown ? "visible" : "hidden"}`}>
                <p className="profile-name">Christella</p>
                <button className="logout-button">Logout</button>
              </div>
            </div>
          </div>
          <hr />

          <div className="careerTestClass">
            {/* CareerTest Component */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
