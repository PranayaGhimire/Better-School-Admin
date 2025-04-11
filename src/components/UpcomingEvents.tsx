

const UpcomingEvents = () => {
  return (
    <div className="font-[Poppins] w-[320px] ml-8 sm:ml-8 sm:w-[391px] h-[490px] sm:h-[384px] rounded-[12px] bg-[#FDFDFD] border-[1px] border-[#E0E0E0] p-[24px] ">
      {/* Upcoming Events & See All */}
      <div className="flex justify-between">
        <h1 className="font-[700] text-[18px] text-[#2D2D2D] leading-[160%]">Upcoming Events</h1>
        <p className="font-[400] text-[14px] leading-[160%] underline text-[#38BAE0] decoration-solid [text-decoration-skip-ink:auto] ">See All</p>
      </div>
      {/* Weeks & Days Left */}
     <div className="w-[343px] h-[307px] gap-[8px]">
            {/* Sports Week & Days Left */}
            <div className="flex flex-col sm:flex-row  sm:items-center justify-between pb-[16px] border-b-[1px] border-b-[#E0E0E0] mt-4">
                {/* Sports Week */}
                <div>
                    <h1 className="font-[400] text-[16px] text-[#2D2D2D] leading-[160%]">Sports Week</h1>
                    <p className="font-[400] text-[13px] text-[#7A7A7A] leading-[160%]">Sunday, 19 Chaitra 2081 to Friday, 24 </p>
                    <p className="font-[400] text-[13px] text-[#7A7A7A] leading-[160%]">Chaitra 2081</p>
                </div>
                {/* Days Left */}
                <p className="font-[400] text-[13px] text-[#4D4D4D] leading-[160%]">
                    9 Days Left
                </p>
            </div>
            {/* Exhibition Week & Days Left */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-[16px] border-b-[1px] border-b-[#E0E0E0]">
                {/* Exhibition Week */}
                <div>
                    <h1 className="font-[400] text-[16px] text-[#2D2D2D] leading-[160%]">Exhibition Week</h1>
                    <p className="font-[400] text-[13px] text-[#7A7A7A] leading-[160%]">Sunday, 19 Chaitra 2081 to Friday, 24 </p>
                    <p className="font-[400] text-[13px] text-[#7A7A7A] leading-[160%]">Chaitra 2081</p>
                </div>
                {/* Days Left */}
                <p className="font-[400] text-[13px] text-[#4D4D4D] leading-[160%]">
                    9 Days Left
                </p>
            </div>
            {/* Arts Week & Days Left  */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-[16px] border-b-[1px] border-b-[#E0E0E0]">
                {/* Arts Week */}
                <div>
                    <h1 className="font-[400] text-[16px] text-[#2D2D2D] leading-[160%]">Arts Week</h1>
                    <p className="font-[400] text-[13px] text-[#7A7A7A] leading-[160%]">Sunday, 19 Chaitra 2081 to Friday, 24 </p>
                    <p className="font-[400] text-[13px] text-[#7A7A7A] leading-[160%]">Chaitra 2081</p>
                </div>
                {/* Days Left */}
                <p className="font-[400] text-[13px] text-[#4D4D4D] leading-[160%]">
                    9 Days Left
                </p>
            </div>
     </div>
    </div>
  )
}

export default UpcomingEvents
