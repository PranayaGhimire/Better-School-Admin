import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import penciledit02 from "../assets/pencil-edit-02.svg";
import arrowdown from "../assets/weui_arrow-filled.svg";
import search01 from "../assets/search-01.svg";
const HomeworkTracking = () => {
  return (
    <div className="flex flex-col ml-8 sm:ml-0 font-[Poppins] w-[320px] sm:w-[1125px] h-[1092px] absolute top-[4100px] sm:top-[2635px] sm:left-[291px] rounded-[12px]
     border-[1px] border-[#E0E0E0] bg-[#FDFDFD] p-[24px] gap-[24px]">
       <h1 className="px-[10px] font-[700] sm:text-[23px] text-[#2D2D2D] text-center leading-[160%]">Homework Tracking Sheets</h1> 
       <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row gap-[16px]">
             <Select>
                <SelectTrigger className="w-[161px]  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
                <SelectValue placeholder="Class 10A" className="text-[#4D4D4D]"  />
                <img src={arrowdown} alt="arrow icon" />
                </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                 {/* <SelectLabel>Classes</SelectLabel>  */}
                  <SelectItem value="Class 10A">Class 10A</SelectItem>
                  <SelectItem value="Class 10B">Class 10B</SelectItem>
                  <SelectItem value="Class 9A">Class 9A</SelectItem>
                  <SelectItem value="Class 9B">Class 9B</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[161px]  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
                <SelectValue placeholder="English" className="text-[#4D4D4D]"  />
                <img src={arrowdown} alt="arrow icon" />
                </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                 {/* <SelectLabel>Subjects</SelectLabel>  */}
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Maths">Maths</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Nepali">Nepali</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[161px]  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
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
          <button className="flex w-[96px] h-[42px] mt-4 sm:mt-0 items-center gap-[8px] bg-[#38BAE0] py-[8px] px-[16px] rounded-[8px] border-[1px] border-[#33A9CC]">
            <img src={penciledit02} alt="edit icon" className="w-[20px] h-[20px]" />
             <span className="font-[700] text-[16px] text-[#FDFDFD] leading-[160%]">Edit</span>     
          </button>
       </div>
       <div className="flex w-[254px] h-[42px] rounded-[8px] gap-[10px] bg-[#F7F7F7] py-[8px] px-[16px] border-[1px] border-[#CBCBCB]">
          <img src={search01} alt="search icon" />
          <input type="text" placeholder="Search Student" className="outline-none"/>
      </div>
    </div>
  )
}

export default HomeworkTracking
