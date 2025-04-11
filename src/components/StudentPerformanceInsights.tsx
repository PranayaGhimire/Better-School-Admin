import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    // SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import search01 from "../assets/search-01.svg"; 
import arrowdown from "../assets/weui_arrow-filled.svg";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register components for the bar chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Chart Data
const data={
    labels:['John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena',
      'John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena','John Dae Cena',
    ],
    datasets: [
        {
            label:"Assignments",
            data:[99,94,88,87,82,80,78,75,72,68,64,60,58,45,40,36,24],
            backgroundColor: "#38BAE0",
            borderRadius: 5,
            barThickness:30,
        },
    ],
};

// Chart Options
const options = {
    responsive: true,
    plugins:{
        legend:{
            display: false,
            // position:"top",
        },
         title:{
             display:false,
            //  text:'Student Count By Class',
         },
         tooltip:{
            enabled:true,
            backgroundColor:"#FDFDFD",
            bodyColor:"#2D2D2D",
            borderColor:"#E0E0E0",
            borderWidth:1,
            padding:12,
            titleColor: "#2D2D2D",
            callbacks:{
                title: (context) => {
                    return `Class: ${context[0].label}`; 
                },
                label: (context) => {
                    return `Assignments: ${context.raw ?? 'N/A'}`;
                }
            },
         },
    },
    scales:{
        x:{
            grid:{
                display: false // Remove vertical grid lines
            },
        },
        y:{
            beginAtZero: true,
            max:100, // force y-axis to end at 14
            ticks: {
                stepSize:10,
                callback: function (value:number) {
                    return value === 0 ? "" : value;
                }
            },
        },
    },
};

const StudentPerformanceInsights = () => {
  return (
    <div className="flex flex-col ml-8 sm:ml-0 font-[Poppins] w-[320px] sm:w-[1125px] h-[835px] 
    rounded-[12px] border-[1px] border-[#E0E0E0] p-[24px] gap-[24px] absolute  top-[5220px] sm:top-[3751px] sm:left-[291px] bg-[#FDFDFD]">
      <h1 className="font-[700] sm:text-[23px] text-[#2D2D2D] text-center leading-[160%]">Student Performance Insights</h1>
      <div className="flex flex-col sm:flex-row gap-[16px]">
            <Select>
                <SelectTrigger className="w-[161px]  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
                <SelectValue placeholder="Class 10B" className="text-[#4D4D4D]"/>
                <img src={arrowdown} alt="arrow icon" />
                </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                 {/* <SelectLabel>Classes</SelectLabel>  */}
                  <SelectItem value="Class 10B">Class 10B</SelectItem>
                  <SelectItem value="Class 10A">Class 10A</SelectItem>
                  <SelectItem value="Class 9A">Class 9A</SelectItem>
                  <SelectItem value="Class 9B">Class 9B</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[161px]  bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
                <SelectValue placeholder="English" className="text-[#4D4D4D]"/>
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
                <SelectTrigger className="py-[8px] px-[16px] bg-[#F7F7F7] border-[1px] border-[#CBCBCB] focus-visible:ring-0 [&>svg]:hidden">
                <SelectValue placeholder="Third Term Exam" className="text-[#4D4D4D]"/>
                <img src={arrowdown} alt="arrow icon" />
                </SelectTrigger>
              <SelectContent>
              <SelectGroup>
                 {/* <SelectLabel>Term Exams</SelectLabel>  */}
                  <SelectItem value="Third Term Exam">Third Term Exam</SelectItem>
                  <SelectItem value="First Term Exam">First Term Exam</SelectItem>
                  <SelectItem value="Second Term Exam">Second Term Exam</SelectItem>
                  <SelectItem value="Fourth Term Exam">Fourth Term Exam</SelectItem>
              </SelectGroup>
              </SelectContent>
            </Select>
      </div>
      <div className="flex items-center w-[250px] border-[1px] border-[#CBCBCB] h-[40.71px] gap-[10px] rounded-[8px] bg-[#F7F7F7] py-[8px] px-[16px]">
        <img src={search01} alt="Search Icon" className="w-[16px] h-[16px]" />
        <input type="text" placeholder="Search Student" className="outline-none" />
      </div>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default StudentPerformanceInsights
