
import leftarrow from "../assets/left arrow.svg";
import rightarrow from "../assets/right arrow.svg";
import CustomCalendar from "./CustomCalendar";
const SchoolCalendar = () => {
  return (
    <div className=" font-[Poppins] ml-8   w-[320px]  sm:w-[391px] h-[491px] bg-[#FDFDFD] rounded-[12px] border-[1px] border-[#E0E0E0] p-[24px] gap-[10px]">
        <div className="flex flex-col gap-[28px]">
            <h1 className="px-[5px] text-[#2D2D2D] font-[700] text-[18px] leading-[160%]">School Calendar</h1>
            {/* Date Bar */}
            <div className="flex justify-between pr-[5px] pl-[5px] font-[Roboto] font-[400] text-[16px] leading-[120%]">
                <select name="" id="" className="outline-none">
                    <option value="Chaitra 2081">Chaitra 2081</option>
                </select>
                {/* Arrows */}
                <div className="flex justify-between w-[41px] h-[24px]">
                    <img src={leftarrow} alt="Left Arrow Icon" />
                    <img src={rightarrow} alt="Right Arrow Icon" />
                </div>
            </div>
            {/* <img src={DateCalendar} alt="Date Calendar Image" />
            <img src={CalendarInfo} alt="Calendar Info Image" /> */}
             <CustomCalendar/> 
        </div>
    </div>
  )
}

export default SchoolCalendar
