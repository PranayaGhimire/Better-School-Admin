
import Frame_3901 from "../assets/Frame 3901.svg";
import circle_arrow_left_01 from "../assets/circle-arrow-left-01.svg";
import DashboardIcon from "../assets/DashboardIcon.svg";
import UserManagementIcon from "../assets/UserManagementIcon.svg";
import arrow_down_01 from "../assets/arrow-down-01.svg";
import SchoolOperationsIcon from "../assets/SchoolOperationsIcon.svg";
import ExamSchedulesIcon from "../assets/Exam&SchedulesIcon.svg";
import InteractionsIcon from "../assets/InteractionsIcon.svg";
import SettingsIcon from "../assets/SettingsIcon.svg";
import LogoutIcon from "../assets/LogoutIcon.svg";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    // Side Nav
    <nav className="flex flex-col font-[Poppins]   w-[267px] h-[1024px] rounded-[1px] bg-[#FDFDFD] pt-[24px] pr-[16px] pb-[24px] pl-[16px] gap-[8px] ">
      {/* Top of Side Nav */}
      <div className="flex justify-between w-[235px] h-[32px] pl-[10px] mb-10">
        <img src={Frame_3901} alt="Logo" />
        <img 
        src={circle_arrow_left_01} alt="Collapse" className="w-[32px] h-[32px]" />
      </div>
      <ul className="flex flex-col gap-[8px]">
        {/* Dashboard */}
      <Link to ="/">
      <li className="flex items-center bg-[#C1EAF5] rounded-[8px] w-[235px] h-[50px] p-[10px] gap-[10px]">
        <img src={DashboardIcon} alt="DashBoard" />
        <p className="font-normal text-[16px] leading-[160%] ">Dashboard</p>
      </li>
      </Link>
   
      {/* User Management */}
      <Link to ="/UserManagement">
      <li className="flex w-[235px] h-[50px] justify-between items-center p-[10px] ">
        <div className="flex w-[183px] h-[26px] gap-[10px] items-center">
          <img src={UserManagementIcon} alt="User Management" />
          <p>User Management</p>
        </div>
      
        <img src={arrow_down_01} alt="Expand" />
      </li>
      </Link>
   
      {/* School Operations */}
      <Link to ="/SchoolOperations">
      <li className="flex w-[235px] h-[50px] justify-between items-center p-[10px]">
        <div className="flex w-[181px] h-[26px] gap-[10px] items-center">
          <img src={SchoolOperationsIcon} alt="" />
          <p>School Operations</p>
        </div>
      
        <img src={arrow_down_01} alt="" />
      </li>
      </Link>
   
      {/* Exam & Schedules */}
      <Link to ="/Exam&Schedules">
      <li className="flex w-[235px] h-[50px] justify-between items-center p-[10px]">
        <div className="flex w-[181px] h-[26px] gap-[10px] items-center">
          <img src={ExamSchedulesIcon} alt="" />
          <p>Exam & Schedules</p>
        </div>
        
        <img src={arrow_down_01} alt="" />
      </li>
      </Link>
   
      {/* Interactions */}
      <Link to="/Interactions">
      <li className="flex w-[235px] h-[50px] justify-between items-center p-[10px]">
        <div className="flex w-[130px] h-[26px] gap-[10px] items-center">
          <img src={InteractionsIcon} alt="" />
          <p>Interactions</p>
        </div>
        <img src={arrow_down_01} alt="" />
      </li>
      </Link>
 
      {/* Fees & Payments */}
      <Link to ="/Fees&Payments">
      <li className="flex w-[235px] h-[50px] justify-between items-center p-[10px]">
        <div className="flex items-center w-[171px] h-[26px] gap-[10px]">
          <img src={InteractionsIcon} alt="" />
          <p>Fees & Payments</p>
        </div>
       
        <img src={arrow_down_01} alt="" />
      </li>
      </Link>
 
      </ul>
      {/* Start of  Settings & Logout */}
      <div className="mt-auto">
          {/* Settings */}
      <Link to="/Settings">
      <div className="flex items-center w-[235px] h-[50px] p-[10px] gap-[10px]">
        <img src={SettingsIcon} alt="Settings" />
        <p>Settings</p>
      </div>
      </Link>
     
      {/* Log Out */}
      <Link to ="/LogOut">
      <div className="flex items-center w-[235px] h-[50px] p-[10px] gap-[10px]">
        <img src={LogoutIcon} alt="Logout" />
        <p>Log Out</p>
      </div>
      </Link>
      </div>
      {/* End of Settings & Logout */}
    </nav>
  )
}

export default SideNav
