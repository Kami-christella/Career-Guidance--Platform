
import { IoHomeOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuBus } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoPersonAdd } from "react-icons/io5";
import DashboardView from "./DashboardView";  
import { IoCall } from "react-icons/io5";

import { FaPeopleRoof } from "react-icons/fa6";

import { FaPeoplePulling } from "react-icons/fa6";

// import { PieChart } from "./Piechart";
import { MdDateRange } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaShopify } from "react-icons/fa";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { RiStarFill } from "react-icons/ri";



// images
import wallpaper from "../assets/images/shoppic.webp";
import dress1 from "../assets/images/dress1.webp"
import dress2 from "../assets/images/dress2.webp"
import dress3 from "../assets/images/dress3.webp"

import { BsEmojiHeartEyes } from "react-icons/bs";

import Me from "../assets/images/e.jpeg"
import { useNavigate } from 'react-router-dom';


import './Dashboard_Styles/Customer.css'
import PieChart  from "./Piechart";


function Customer(){
    const navigate = useNavigate();
    // const location = useLocation();
    return(
        <section className="allClassesb">
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
          <div className="divClassb" onClick={() => navigate('/dashboard')}><IoHomeOutline />   <span className="sidei">Dashboard</span></div>
         <div className="ActiveNavContainer">
             <div className="divClassb"  onClick={() => navigate("/customer")}
            >
      <IoIosPeople /> <span className="sidei">Customer</span>
             </div>
         </div>
          <div className="divClassb" onClick={() => navigate("/Orders")}> <LuBus /><span className="sidei">Orders</span></div>
          <div className="divClassb"> <MdProductionQuantityLimits /><span className="sidei">Products</span> </div>
          <div className="divClassb"> <MdEmail /><span className="sidei">Email</span></div>
          <div className="divClassb"> <BsChatHeart /><span className="sidei">Chat</span></div>
          <br/><br/>
          <div className="divClassb" onClick={() => navigate("/Settings")}> <IoSettings /><span className="sidei">Settings</span></div>
          <div className="divClassb" onClick={() => navigate("/Home")} > <TbLogout /><span className="sidei">Logout</span></div>
          {/* <div className="dropdown">
           <button className="dropbtn1">UI Element<MdArrowDropDown className='dropicon1' /></button> 
           <div className="dropdown-content">
            <a href="#">Uncategorized</a>
            <a href="#">General</a>
            </div>
          </div> */}
        
       
         
         
        </div>
        <div className="allRightSide">
        <div className="rightClassb">
     <div className="firstRow">

             <div className="platformHeaderb"> Welcome,</div>
            <div className="myName">  Christella</div>
           <div className="heartIcon"><BsEmojiHeartEyes /></div>
           <div>
           <input type="text" className="inputsearchBar" placeholder="Search Customer..." /> <CiSearch className="searchIcon3"/>
           </div>
           <div ><IoNotificationsCircleSharp className="notificationClass"/><GoDotFill className="dotIcon" /></div>
           <div ><TfiEmail className="MessageIconTop"/></div>
           <div className="ecommerceHeader"><FaShopify /> E-Commerce</div>
  {/* <img src={Me} alt="Profile Picture" className="circle-image"/> */}

    </div>
          {/* cards */}
          <div className="Dashboardcards">
            {/* first card */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
  
  <div className="iconContainer"><FaPeopleRoof className="cardIcon"/></div> <h3 className="card-title"> 3000 </h3> 
    <p className="card-text">Total Customers</p>
  </div> 
</div> 
{/* card 2 */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>

  <div className="card-body">
  <div className="iconContainer"><IoPersonAdd  className="cardIcon2"/></div> <h3 className="card-title"> 120 </h3> 
  <p className="card-text"> New Customers</p>
  </div> 
</div> 
{/* third card */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
  <div className="iconContainer"><FaPeoplePulling  className="cardIcon3"/></div> <h3 className="card-title">1,200</h3> 
  <p className="card-text"> Returning Customers</p>
  </div> 
</div> 
{/* fourth card */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
  <div className="iconContainer"><RiStarFill  className="cardIcon"/></div> <h3 className="card-title"> 4.5/5 </h3> 
  <p className="card-text"> Customer Satisfaction</p>
  </div> 
</div> 
</div> <br /> <br />
 {/*end of cards  */}

{/* start of chart */}
<div className="allDashboardsView">
<div className="dashboardView">
  <span className="salesTrend">Customer Growth Chart</span> <br /> <br />
<DashboardView />
</div>
<div className="pieChartContiner">
    <PieChart className="pieChart"/>
</div>
</div> 
{/* end of chart */}
<br/><br/>
{/*  table codes beginning */}

<div className="secondRow">


<table className="orderTable">
  <thead>
  						
    <tr>
      <th>Profile</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Orders Placed</th>
      <th>Last Purchase</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src={dress1} alt="Product" className="rectangle-image"/></td>
      <td>Bella Hadid</td>
      <td>bella@gmail.com</td>
      <td><IoCall />07803452</td>
      <td>15</td>
      <td><MdDateRange />12/09/25</td>
      <td className="Orderstatus">Active</td>
     
    </tr>
    
    <tr>
      <td><img src={dress2} alt="Product" className="rectangle-image"/></td>
      <td>John Lee</td>
      <td>john@gmail.com</td>
      <td><IoCall />0780678</td>
      <td>15</td>
      <td><MdDateRange />12/10/25</td>
      <td className="Orderstatus">Active</td>
     
    </tr>

    <tr>
      <td><img src={dress3} alt="Product" className="rectangle-image"/></td>
      <td>Bella Hadid</td>
      <td>bella@gmail.com</td>
      <td><IoCall />07803452</td>
      <td>15</td>
      <td><MdDateRange />12/09/25</td>
      <td className="">Inactive</td>
     
    </tr>

    <tr>
      <td><img src={wallpaper} alt="Product" className="rectangle-image"/></td>
      <td>Bella Hadid</td>
      <td>bella@gmail.com</td>
      <td><IoCall />07803452</td>
      <td>15</td>
      <td><MdDateRange />12/02/25</td>
      <td className="">Inactive</td>
     
    </tr>
  </tbody>
</table>


{/*  table codes ending */}

   {/* <div className="pieChartContiner">
    <PieChart className="pieChart"/>
  </div> */}
</div>
<br /> <br />

        </div>
        </div>
        </section>
    )
}

export default Customer