
import { IoHomeOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { LuBus } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsChatHeart } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcSalesPerformance } from "react-icons/fc";
import DashboardView from "./DashboardView";  
import Dashboard2 from "./Dashboard2";  
// import { PieChart } from "./Piechart";
import { MdDateRange } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaShopify } from "react-icons/fa";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useNavigate, useLocation } from 'react-router-dom';

// images
import wallpaper from '../assets/images/bo1.webp'
import dress1 from "../assets/images/bo2.webp"
import dress2 from "../assets/images/bo3.webp"
import dress3 from "../assets/images/bo1.webp"

import { BsEmojiHeartEyes } from "react-icons/bs";

import Me from "../assets/images/Me.jpeg"



import './Dashboard_Styles/sidebar.css'
import PieChart  from "./Piechart";
import CareerTest from "./CareerTest";
// import Dashboard from './../../../website2/src/components/Dashboard';



function Sidebar(){
  const navigate = useNavigate();
  const location = useLocation();
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
         
         <div className="ActiveNavContainer">
         <div className="divClassb"><IoHomeOutline />   <span className="sidei">Dashboard</span></div>
          </div> 
          <div className="divClassb" onClick={() => navigate('/Career-test')}>
               <IoIosPeople /> <span className="sidei">Career Guidance Tests</span>
          </div>
          <div className="divClassb" onClick={() => navigate("/Orders")}> 
            <LuBus /><span className="sidei">Orders</span>
            </div>
          <div className="divClassb"> <MdProductionQuantityLimits /><span className="sidei">Products</span> </div>
          <div className="divClassb"> <MdEmail /><span className="sidei">Email</span></div>
          <div className="divClassb"> <BsChatHeart /><span className="sidei">Chat</span></div>
          <br/><br/>
          <div className="divClassb" onClick={() => navigate("/Settings")}> <IoSettings /><span className="sidei">Settings</span></div>
          <div className="divClassb" onClick={() => navigate("/")}> <TbLogout /><span className="sidei">Logout</span></div>
         
        {/* end of */}
       
         
         
        </div>
        <div className="allRightSide">
        <div className="rightClassb">
     <div className="firstRow">

             <div className="platformHeaderb"> Welcome,</div>
            <div className="myName">  Christella</div>
           <div className="heartIcon"><BsEmojiHeartEyes /></div>
           <div>
           <input type="text" className="inputsearchBar" placeholder="Search products..." /> <CiSearch className="searchIcon3"/>
           </div>
           <div ><IoNotificationsCircleSharp className="notificationClass"/><GoDotFill className="dotIcon" /></div>
           <div ><TfiEmail className="MessageIconTop"/></div>
           <div className="ecommerceHeader">Career Guidance Platform</div>
  {/* <img src={Me} alt="Profile Picture" className="circle-image"/> */}

    </div>
          {/* cards */}
          <div className="Dashboardcards">
            {/* first card */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
  
  <div className="iconContainer"><IoIosPeople className="cardIcon"/></div> <h3 className="card-title"> 2000+ </h3> 
    <p className="card-text"> Customers</p>
  </div> 
</div> 
{/* card 2 */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>

  <div className="card-body">
  <div className="iconContainer"><MdProductionQuantityLimits  className="cardIcon2"/></div> <h3 className="card-title"> 140+ </h3> 
  <p className="card-text"> Products</p>
  </div> 
</div> 
{/* third card */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
  <div className="iconContainer"><LuBus  className="cardIcon3"/></div> <h3 className="card-title"> 1600+ </h3> 
  <p className="card-text"> Orders</p>
  </div> 
</div> 
{/* fourth card */}
<div className="card text-black bg-white mb-3" style={{ maxWidth: "15rem", maxHeight:"10rem" }}>
  {/* <div className="card-header">Header</div> */}
  <div className="card-body">
  <div className="iconContainer"><FcSalesPerformance  className="cardIcon"/></div> <h3 className="card-title"> 3500+ </h3> 
  <p className="card-text"> Sales</p>
  </div> 
</div> 
</div> <br /> <br />
 {/*end of cards  */}

{/* start of chart */}
<div className="allDashboardsView">
<div className="dashboardView">
  <span className="salesTrend">Sales Trend</span> <br /> <br />
<DashboardView />
</div>
<div className="dashboardView2">
<span className="salesTrend">Product Views</span> <br /> <br />
  <Dashboard2/>
</div>
</div> 
{/* end of chart */}
<br/><br/>
{/*  table codes beginning */}

<div className="secondRow">


<table className="orderTable">
  <thead>
    <tr>
      <th>Product</th>
      <th>Order ID</th>
      <th>Customer Name</th>
      <th>Date</th>
      <th>Price</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src={dress1} alt="Product" className="rectangle-image"/></td>
      <td>#1368d5</td>
      <td>Alice Joe</td>
      <td><MdDateRange />12/09/25</td>
      <td>3000</td>
      <td className="Orderstatus">Completed</td>
    </tr>
    
    <tr>
      <td><img src={dress2} alt="Product" className="rectangle-image"/></td>
      <td>#1368d5</td>
      <td>Alice Joe</td>
      <td><MdDateRange />12/09/25</td>
      <td>3000</td>
      <td className="OrderPending">Pending</td>
    </tr>

    <tr>
      <td><img src={dress3} alt="Product" className="rectangle-image"/></td>
      <td>#1368d5</td>
      <td>Alice Joe</td>
      <td><MdDateRange />12/09/25</td>
      <td>3000</td>
      <td className="Orderstatus">Completed</td>
    </tr>

    <tr>
      <td><img src={wallpaper} alt="Product" className="rectangle-image"/></td>
      <td>#1368d5</td>
      <td>Alice Joe</td>
      <td><MdDateRange />12/09/25</td>
      <td>3000</td>
      <td className="OrderPending">Pending</td>
    </tr>
  </tbody>
</table>


{/*  table codes ending */}



   <div className="pieChartContiner">
    <PieChart className="pieChart"/>
  </div>
</div>
  <CareerTest/>
<div>
  
</div>
<br /> <br />

        </div>
        </div>
        </section>
    )
}

export default Sidebar