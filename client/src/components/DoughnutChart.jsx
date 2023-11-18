import { Doughnut } from "react-chartjs-2"

import { Chart as ChartJS, PointElement, LinearScale, Title, CategoryScale, ArcElement, Legend, Tooltip, Filler, Colors } from 'chart.js';
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

ChartJS.register(PointElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Legend, Tooltip, Filler, Colors);

function DoughnutChart() {
    const { report } = useContext(AppContext)

    const {
        numerical,
        varbal,
        reasoning,
        genaral,
    } = report

    const chartData = {
        labels: ['Numerical', 'Reasoning', 'Varbal', 'GK'],
        datasets: [
            {
                label: 'Category Marks',
                data: [numerical, reasoning, varbal, genaral],
                backgroundColor: ['#059bff', '#ffc846', '#eb4034', '#fe6434']
            }
        ]
    }

    return (
        <Doughnut data={chartData} />
    )
}

export default DoughnutChart