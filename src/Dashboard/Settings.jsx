
import { IoHomeOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuBus } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiSearch } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaShopify } from "react-icons/fa";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useNavigate, useLocation } from 'react-router-dom';
import { BsEmojiHeartEyes } from "react-icons/bs";
import { RxSwitch } from "react-icons/rx";


import Me from "../assets/images/Me.jpeg"



import './Dashboard_Styles/sidebar.css'
// import Dashboard from './../../../website2/src/components/Dashboard';



function Settings(){
  const navigate = useNavigate();
    return(
     
        <section className="allClassesb">
         {/* start of left class */}
        <div className="leftClassb">

          {/* navbar start */}
          {/* navbar end */}

          <div className="headerOfIconsb"> <div> <img src={Me} alt="Profile Picture" className="circle-image"/>
          </div> <div className="loginheaderb">Kami Christella</div><br></br>
          <span className="developerSpan">Software Developer</span>
                {/* <div className="swDeveloper"> Software Developer</div> */}
          </div>
                  
          {/* <hr></hr> */} 
          {/* <div className="divClassb"> All Boards(4)</div> */}
          <br />
         
       
         <div className="divClassb"><IoHomeOutline />   <span className="sidei">Dashboard</span></div>
         
          <div className="divClassb" onClick={() => navigate('/Customer')} >
  <IoIosPeople /> <span className="sidei">Customer</span>
</div>
          <div className="divClassb" onClick={() => navigate("/Orders")}> <LuBus /><span className="sidei">Orders</span></div>
          <div className="divClassb"> <MdProductionQuantityLimits /><span className="sidei">Products</span> </div>
          <div className="divClassb"> <MdEmail /><span className="sidei">Email</span></div>
          <div className="divClassb"> <BsChatHeart /><span className="sidei">Chat</span></div>
          <br/><br/>
          <div className="ActiveNavContainer">
          <div className="divClassb" onClick={() => navigate("/Settings")}> <IoSettings /><span className="sidei">Settings</span></div>
          </div>
          <div className="divClassb" onClick={() => navigate("/Home")}> <TbLogout /><span className="sidei">Logout</span></div>
         
        {/* end of */}
       
         
         
        </div>
        <div className="allRightSide">
        <div className="rightClassb">
     <div className="firstRow">

             <div className="platformHeaderb"> Welcome,</div>
            <div className="myName">  Christella</div>
           <div className="heartIcon"><BsEmojiHeartEyes /></div>
           <div>
           <input type="text" className="inputsearchBar" placeholder="Search Setting..." /> <CiSearch className="searchIcon3"/>
           </div>
           <div ><IoNotificationsCircleSharp className="notificationClass"/><GoDotFill className="dotIcon" /></div>
           <div ><TfiEmail className="MessageIconTop"/></div>
           <div className="ecommerceHeader"><FaShopify /> E-Commerce</div>
 
    </div>
  
        </div>
        </div>
        <div>
      Change Theme: <RxSwitch />
      Change Language 
      </div>
        </section>
    )
}

export default Settings