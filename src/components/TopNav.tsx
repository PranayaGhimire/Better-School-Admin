import search_01 from "../assets/search-01.svg";
import Group_1 from "../assets/Group 1.svg";
import Ellipse_1 from "../assets/Ellipse 1.svg";
import arrow_down_01 from "../assets/arrow-down-01.svg";
const TopNav = () => {
  return (
    <nav className="flex font-[Poppins] w-[1250px] h-[74px] border-[1px] absolute left-[267px]  border-[#F7F7F7] bg-[#FDFDFD]  rounded-[1px] justify-between pt-[16px] pr-[24px] pb-[16px] pl-[24px]">
        {/* Search Input */}
        <div className="flex items-center w-[372px] h-[42px] rounded-[8px] gap-[10px] py-[10px] px-[16px]  bg-[#F7F7F7] border-[1px] border-[#E0E0E0]">
            <img src={search_01} alt="" />
            <input type="text" placeholder="Search..." className="text-[14px] leading-[160%] w-full outline-none placeholder:text-[#4D4D4D]" />
        </div>
      {/* Notifications */}
      <div className="flex w-[100px] h-[32px] justify-between items-center">
        <img src={Group_1} alt="" />
        <div className="flex w-[52px] h-[32px] gap-[4px] items-center">
            <img src={Ellipse_1} alt="" />
            <img src={arrow_down_01} alt="" className="w-[16px] h-[16px]" />
        </div>
      </div>
    </nav>
  )
}

export default TopNav
