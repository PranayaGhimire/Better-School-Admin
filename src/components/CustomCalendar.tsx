import { useState } from "react"
import dayjs from "dayjs";
import { ChevronRight, Divide } from "lucide-react";
const CustomCalendar = () => {
   const [currentDate,setCurrentDate] = useState(dayjs());
  
  const daysOFWeek = ["S","M","T","W","T","F","S"];
  const startOfMonth = currentDate.startOf("month");
  const endOFMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const totalDays = currentDate.daysInMonth();

  const today = dayjs();
  const generateDays = () => {
    const days = [];

    // Empty slots before the first day
    for(let i = 0; i < startDay;i++){
        days.push(<div 
        key={`empty-${i}`} className="text-gray-300">
        </div>);
    }

    // Actual days
    for(let i = 1; i <= totalDays;i++){
        const thisDay = currentDate.date(i);
        const isToday = thisDay.isSame(today, "date");

        days.push(
            <div
            key={i}
            className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                isToday ? "bg-blue-500 text-white font-semibold": "hover:bg-blue-100"
                }`}
            >
              {i}
            </div>
        );
    }
    return days;
  };
  return (
    <div className="w-full max-w-md mx-auto ">
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-4">
        <button
        onClick={()=>setCurrentDate(currentDate.subtract(1,"month"))}
        >
        </button>
      </div> */}

      {/* Weekdays */}
      <div className="grid grid-cols-7  text-[#2D2D2D] font-[Roboto] font-[400] mb-2">
        {daysOFWeek.map((day) => (
            <div key={day} className="text-center">
                {day}
            </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {generateDays()}
      </div>
    </div>
  );
};

export default CustomCalendar
