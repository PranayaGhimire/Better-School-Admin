import penciledit02 from "../assets/pencil-edit-02.svg";
import search01 from "../assets/search-01.svg";
const StudentAttendance = () => {
  return (
    <div className="flex flex-col font-[Poppins] ml-8 sm:ml-0 w-[320px] sm:w-[1125px] h-[1092px] gap-[24px] absolute top-[2980px] sm:top-[1519px] sm:left-[291px] bg-[#FDFDFD] rounded-[12px] p-[24px] border-[1px] border-[#E0E0E0] ">
      <h1 className="font-[700] sm:text-[23px] text-[#2D2D2D] text-center leading-[160%]">Student's Attendance</h1>
      <div className="flex flex-col  sm:flex-row justify-between">
        <div className="flex flex-col sm:flex-row w-[338px] h-[42px] gap-[16px]">
            <select name="" id="" className=" w-[161px] bg-[#F7F7F7] border-[1px] border-[#CBCBCB] px-[16px] py-[8px]
             rounded-[8px] outline-none text-[#4D4D4D]">
                <option value="Class 9A">Class 9A</option>
            </select>
            <select name="" id="" className=" w-[161px] bg-[#F7F7F7] border-[1px] rounded-[8px] outline-none
             border-[#CBCBCB] py-[8px] px-[16px] text-[#4D4D4D] text-[16px] font-[400] leading-[160%]">
                <option value="Chaitra">Chaitra</option>
            </select>
        </div>
        {/* Edit */}
        <button className=" mt-18 sm:mt-0 flex items-center w-[96px] h-[42px] bg-[#38BAE0] cursor-pointer rounded-[8px] border-[1px] border-[#33A9CC] py-[8px] px-[16px] gap-[8px]">
          <img src={penciledit02} alt="pencil Edit Icon" className="w-[20px] h-[20px]" />
          <p className="font-[700] text-[16px] text-[#FDFDFD] leading-[160%]">Edit</p>
        </button>
      </div>
          {/* Search Student */}
          <div className="flex items-center w-[254px] h-[42px] rounded-[8px] py-[8px] px-[16px] gap-[10px] bg-[#F7F7F7] border-[1px] border-[#CBCBCB]">
          <img src={search01} alt="Search Icon" className="w-[16px] h-[16px]" />
          <input type="text" placeholder="Search Student"/>
        </div>
    </div>
  )
}

export default StudentAttendance
