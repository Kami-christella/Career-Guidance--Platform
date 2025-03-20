import Sidebar from './Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import CareerTest from './CareerTest.jsx';

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      {/* <CareerTest /> */}
      <div className="dashboard-content">
       {/* This ensures nested routes (CareerTest, Content2) are displayed */}

        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
// import Sidebar from './Sidebar.jsx';
// import { Outlet } from 'react-router-dom';

// function DashboardLayout() {
//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       {/* <div className="dashboard-content" style={{ flexGrow: 1, padding: "20px" }}> */}
//         {/* This ensures only the active route's component is displayed */}
//         {/* <Outlet />  */}
//       {/* </div> */}
//     </div>
//   );
// }

// export default DashboardLayout;
