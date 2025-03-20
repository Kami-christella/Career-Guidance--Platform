// import { useState } from "react";
// import { User, Settings, ListChecks } from "lucide-react";
// import { Card, CardContent } from "@shadcn/ui";
// import { Button } from "@shadcn/ui";

// export default function UserDashboard() {
//   const [selectedTab, setSelectedTab] = useState("Available Assessments");

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Left Sidebar */}
//       <div className="w-1/4 bg-white p-5 shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Career Assessments</h2>
//         <ul className="space-y-2">
//           {["Available Assessments", "Completed Assessments", "Suggested Career Paths"].map((tab) => (
//             <li
//               key={tab}
//               className={`p-2 rounded-md cursor-pointer transition-all ${
//                 selectedTab === tab ? "bg-green-500 text-white" : "hover:bg-gray-200"
//               }`}
//               onClick={() => setSelectedTab(tab)}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <Card>
//           <CardContent>
//             <h2 className="text-2xl font-semibold">{selectedTab}</h2>
//             <p className="text-gray-600 mt-2">Content for {selectedTab} will appear here.</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Right Sidebar (User Profile) */}
//       <div className="w-1/4 bg-white p-5 shadow-md">
//         <h2 className="text-xl font-semibold mb-4">User Profile</h2>
//         <div className="flex items-center space-x-4 mb-4">
//           <User className="w-12 h-12 text-gray-500" />
//           <div>
//             <h3 className="text-lg font-medium">John Doe</h3>
//             <p className="text-gray-500">johndoe@example.com</p>
//           </div>
//         </div>
//         <Button className="w-full flex items-center justify-center gap-2">
//           <Settings size={16} /> Edit Profile
//         </Button>
//         <Button variant="outline" className="w-full mt-2 flex items-center justify-center gap-2">
//           <ListChecks size={16} /> Account Settings
//         </Button>
//       </div>
//     </div>
//   );
// }


