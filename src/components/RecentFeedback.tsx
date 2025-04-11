
import user from "../assets/user.svg";
import addcircle from "../assets/add-circle.svg";
const RecentFeedback = () => {
  return (
    <div className=" font-[Poppins] ml-8  w-[320px] sm:w-[391px] h-[427px] rounded-[12px] border-[1px] border-[#E0E0E0] p-[24px] bg-[#FDFDFD]">
      {/* Recent Feedbacks & See All */}
      <div className="flex justify-between">
            <h1 className="font-[700] text-[18px] leading-[160%] text-[#2D2D2D]">Recent Feedbacks</h1>
            <p className="font-[400] text-[14px] text-[#38BAE0] leading-[160%] underline decoration-solid [text-decoration-skip-ink:auto]">See All</p>
      </div>
      {/* Test Feeds & Users */}
      <div>
        {/* Test Feed & User */}
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E0E0E0]">
            {/* Test Feed */}
            <div className="">
                <h2 className="font-[400] text-[16px] text-[#2D2D2D] leading-[160%]">Test Feed</h2>
                <p className="font-[400] text-[13px] text-[#4D4D4D] leading-[160%]">Created on: 2025/03/25</p>
            </div>
            {/* User */}
            <div className="flex gap-[4px] items-center">
                <img src={user} alt="User Icon" />
                <p className="font-[Roboto] font-[400] text-[13px] text-[#4D4D4D] leading-[120%]">1</p>
            </div>
        </div>
        {/* Test Feed 2 */}
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E0E0E0]">
            {/* Test Feed 2 */}
            <div className="">
                <h2 className="font-[400] text-[16px] text-[#2D2D2D] leading-[160%]">Test Feed 2</h2>
                <p className="font-[400] text-[13px] text-[#4D4D4D] leading-[160%]">Created on: 2025/03/20</p>
            </div>
            {/* User */}
            <div className="flex gap-[4px] items-center">
                <img src={user} alt="User Icon" />
                <p className="font-[Roboto] font-[400] text-[13px] text-[#4D4D4D] leading-[120%]">12</p>
            </div>
        </div>
        {/* Test Feed 3 */}
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E0E0E0]">
            {/* Test Feed 3 */}
            <div className="">
                <h2 className="font-[400] text-[16px] text-[#2D2D2D] leading-[160%]">Test Feed 3</h2>
                <p className="font-[400] text-[13px] text-[#4D4D4D] leading-[160%]">Created on: 2025/03/25</p>
            </div>
            {/* User */}
            <div className="flex gap-[4px] items-center">
                <img src={user} alt="User Icon" />
                <p className="font-[Roboto] font-[400] text-[13px] text-[#4D4D4D] leading-[120%]">5</p>
            </div>
        </div>
        {/* Create Feedback */}
        <button className="flex justify-center items-center w-[270px] sm:w-[342px] h-[47px] bg-[#38BAE0] rounded-[8px]  py-[16px] gap-[4px] mt-16 cursor-pointer">
            <img src={addcircle} alt="add icon" className="w-[24px] h-[24px]" />
            <span className="text-[#FFFFFF] font-[700] text-[16px] leading-[160%]">Create Feedback</span>
        </button>
      </div>
     
    </div>
  )
}

export default RecentFeedback
