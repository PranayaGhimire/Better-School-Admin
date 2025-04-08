
import StudentsGroup2 from "../assets/StudentsGroup 2.svg";
import TeachersGroup2 from "../assets/TeachersGroup 2.svg";
import ClassesGroup2 from "../assets/ClassesGroup 2.svg";
import SubjectsGroup2 from "../assets/SubjectsGroup 2.svg";
const DashBoard = () => {
  return (
    <div className="pt-24 pl-8 font-[Poppins] bg-gray-200 h-[1200px]">
      <h1 className="text-[#184E5E] text-[23px] font-[700] leading-[160%]">Dashboard</h1>
      <h2 className="text-[#2D2D2D] text-[26px] leading-[160%] font-[700]">Welcome, John!</h2>
      <p className="text-[#464646] text-[16px] leading-[160%] font-[700]">Welcome back to Better School Admin Dashboard</p>
      {/* Students & Teachers & Classes & Subjects */}
      <div className="flex w-[712px] h-[75px] gap-[24px] absolute top-[232px] left-[291px]  ">
        {/* Students */}
        <div className="flex items-center justify-center w-[160px] h-[75px] rounded-[12px] gap-[16px] bg-[#FDFDFD] pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-[1px] border-[#E0E0E0]">
          <img src={StudentsGroup2} alt="Students" className="w-[46px] h-[46px]" />
          <div className="flex flex-col w-[55px] h-[59px]">
            <p className="text-[14px] text-[#464646] leading-[160%] font-[400] w-[62px] h-[22px]">
            Students
            </p>
            <p className="text-[23px] text-[#184E5E] font-[700] leading-[160%] w-[62px] h-[37px]">
              300
            </p>
          </div>
        </div>
        {/* Teachers */}
        <div className="flex justify-center items-center w-[160px] h-[75px] rounded-[12px] gap-[16px] bg-[#FDFDFD] pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-[1px] border-[#E0E0E0] ">
          <img src={TeachersGroup2} alt="Teachers" className="w-[46px] h-[46px]" />
          <div className="flex flex-col">
            <p className="text-[14px] text-[#464646] leading-[160%] font-[400]">
              Teachers
            </p>
            <p className="text-[23px] text-[#184E5E] font-[700] leading-[160%]">
              58
            </p>
          </div>
        </div>
        {/* Classes */}
        <div className="flex justify-center items-center w-[160px] h-[75px] rounded-[12px] gap-[16px] bg-[#FDFDFD] pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-[1px] border-[#E0E0E0] ">
          <img src={ClassesGroup2} alt="Classes" className="w-[46px] h-[46px]" />
          <div>
            <p className="text-[14px] text-[#464646] leading-[160%] font-[400]">
              Classes
            </p>
            <p className="text-[23px] text-[#184E5E] font-[700] leading-[160%]">
              9
            </p>
          </div>
        </div>
        {/* Subjects */}
        <div className="flex justify-center items-center w-[160px] h-[75px] rounded-[12px] gap-[16px] bg-[#FDFDFD] pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-[1px] border-[#E0E0E0] ">
          <img src={SubjectsGroup2} alt="Subjects" className="w-[46px] h-[46px]" />
          <div>
            <p className="text-[14px] text-[#464646] leading-[160%] font-[400]">
              Subjects
            </p>
            <p className="text-[23px] text-[#184E5E] font-[700] leading-[160%]">
              20
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
