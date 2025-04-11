import { Bar } from "react-chartjs-2";
import search01 from "../assets/search-01.svg";
import Rectangle from "../assets/Rectangle 18830.svg";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

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
    labels:['John Doe Cena','John Doe Cena','John Doe Cena','John Doe Cena','John Doe Cena',],
    datasets: [
        {
            label:"Assignments",
            data:[34,25,60,50,27],
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
                    return context[0].label; 
                },
                label: (context) => {
                    return `Login Count  ${context.raw ?? 'N/A'}`;
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
            max:60, // force y-axis to end at 14
            ticks: {
                stepSize:10,
                callback: function (value:number) {
                    return value === 0 ? "" : value;
                }
            },
        },
    },
};
const ApplicationUsage = () => {
  return (
    <div className="w-[320px] sm:w-[712px] h-[450px] sm:h-[570px] p-8 font-[Poppins] rounded-[12px] border-[1px] border-[#E0E0E0] absolute top-[1110px] sm:top-[925px] sm:left-[290px] bg-[#FDFDFD]">
        <h1 className="  top-[949px] left-[314px] font-[700] text-[16px] sm:text-[18px] leading-[160%] text-[#2D2D2D] mb-5 sm:mb-0">
            Application Usages Analysis</h1>
        {/* Search User & Chaitra */}
        <div className="flex flex-col sm:flex-row w-[423px] h-[42px] gap-[16px]">
            {/* Search User */}
            <div className="flex items-center w-[250px] h-[42px] bg-[#F7F7F7] gap-[10px] border-[1px] rounded-[8px] border-[#CBCBCB] pt-[8px] pr-[16px] pb-[8px] pl-[16px]">
                <img src={search01} alt="Search Icon" className="w-[16px] h-[16px]" />
                <input type="text" placeholder="Search User" className="outline-none" />
            </div>
            {/* chaitra */}
            <div>
                <select name="" id="" className=" w-[157px] outline-none  bg-[#F7F7F7] border-[1px] text-[#4D4D4D] font-[400] text-[16px] leading-[160%] border-[#CBCBCB] rounded-[8px] pt-[8px] pr-[16px] pb-[8px] pl-[16px]">
                    <option value="Chaitra">Chaitra</option>
                </select>
            </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-[12px] sm:mt-4 mt-18">
            <button className="w-[121px] h-[46px] cursor-pointer bg-[#38BAE0] font-[400] text-[16px] leading-[160%] text-[#FDFDFD] rounded-[8px] p-[10px] gap-[10px] ">
                Teacher
            </button>
            <button className="w-[121px] h-[46px] cursor-pointer border-[2px] border-[#38BAE0] rounded-[8px] p-[10px] gap-[10px]
            font-[400] text-[16px] text-[#38BAE0] leading-[160%]">
                Student
            </button>
        </div>
        {/* <img src={ByClassChart2} alt="Class Chart" className="mt-8" /> */}
        <Bar data={data} options={options} className="mt-4"/>
        <div className="flex gap-[8px] justify-center mt-4">
            <img src={Rectangle} alt="Rectangle" />
            <p className="font-[400] text-[14px] text-[#4D4D4D] leading-[160%]">Top 5 Application Users</p>
        </div>
    </div>
  )
}

export default ApplicationUsage
