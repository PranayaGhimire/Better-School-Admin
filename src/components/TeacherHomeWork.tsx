import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import searchIcon from "../assets/search-01.svg";
import arrowdown from "../assets/weui_arrow-filled.svg";
// import arrowdown01 from "../assets/arrow-down-01.svg";
import BarChart from "./BarChart";
import Rectangle from "../assets/Rectangle 18830.svg";
const TeacherHomeWork = () => {
  return (
    <div className=" w-[320px] sm:w-[712px] h-[450px] sm:h-[570px] p-8 absolute top-[630px] sm:top-[331px] sm:left-[291px] rounded-[12px] border-[1px] border-[#E0E0E0] 
        bg-[#FDFDFD] font-[Poppins]">
        <h1 className="font-[700] text-[16px] sm:text-[18px] leading-[160%] text-[#2D2D2D] mb-4 ">
        Teacher Homework Analysis</h1>
        {/* Search Teacher & Chaitra */}
        <div className="flex flex-col sm:flex-row  gap-[12px] sm:w-[419px] h-[42px] ">
            {/* Search Teacher */}
            <div className="flex items-center rounded-[8px] border-[1px] gap-[10px] bg-[#F7F7F7] border-[#CBCBCB] pt-[8px] pr-[16px] pb-[8px] pl-[16px] w-[190px] sm:w-[250px]
             h-[42px]">
                <img src={searchIcon} alt="searchIcon" className="w-[16px] h-[16px]" />
                <input type="text" placeholder="Search Teacher" className="outline-none" />
            </div>
            <Select>
                <SelectTrigger className="sm:w-[161px]  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
                <SelectValue placeholder="Chaitra" className="text-[#4D4D4D]"  />
                <img src={arrowdown} alt="arrow icon" />
                </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                 {/* <SelectLabel>Months</SelectLabel>  */}
                  <SelectItem value="Chaitra">Chaitra</SelectItem>
                  <SelectItem value="Baishakh">Baishakh</SelectItem>
                  <SelectItem value="Jestha">Jestha</SelectItem>
                  <SelectItem value="Asar">Asar</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>

        </div>
        {/* Distribution By Class */}
        {/* <div className="flex w-[255px] h-[42px] mt-5 items-center rounded-[8px] border-[1px] border-[#CBCBCB] gap-[32px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] bg-[#F7F7F7]">
           <p className="font-[400] text-[16px] leading-[160%] w-[162px] h-[26px] text-[#4D4D4D] ">Distribution By Class</p>
           <img src={arrowdown01} alt="" /> 
        </div> */}
               <Select>
                <SelectTrigger className=" flex gap-[32px] w-[250px] h-[42px] mt-16 sm:mt-4  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 
                [&>svg]:hidden py-[8px] px-[16px]">
                <SelectValue placeholder="Distribution By Class" className="text-[#4D4D4D]"  />
                <img src={arrowdown} alt="" />
                </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                 {/* <SelectLabel>Distribution By Classes </SelectLabel>  */}
                  <SelectItem value="Class 9A">Class 9A</SelectItem>
                  <SelectItem value="Class 9B">Class 9B</SelectItem>
                  <SelectItem value="Class 10A">Class 10A</SelectItem>
                  <SelectItem value="Class 10B">Class 10B</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>
        <BarChart/>
        <div className="flex gap-[8px] justify-center mt-3">
          <img src={Rectangle} alt="" />
          <p className="font-[400] text-[14px] text-[#4D4D4D] leading-[160%]">Assignment</p>
        </div>
    </div>
  )
}

export default TeacherHomeWork
