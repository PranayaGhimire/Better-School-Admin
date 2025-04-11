
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
    labels:['10A','10B','9B',"8A","7B"],
    datasets: [
        {
            label:"Assignments",
            data:[9,0,5,0,7],
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
            max:14, // force y-axis to end at 14
            ticks: {
                stepSize:2,
                callback: function (value:number) {
                    return value === 0 ? "" : value;
                }
            },
        },
    },
};
const BarChart = () => {
  return (
    <Bar data={data} options={options} className="mt-5"/>
  );
}

export default BarChart
