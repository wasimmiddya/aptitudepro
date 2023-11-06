import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, BarElement, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, BarElement, CategoryScale);

import AppContext from "../contexts/AppContext"


function BarChart() {
    const { report } = useContext(AppContext)

    const { correct, wrong, attempt, unattempt } = report

    const chartData = {
        labels: ['Currect', 'Wrong', 'Attempt', 'Unattempt'],
        datasets: [{
            label: 'Test Report',
            data: [correct, wrong, attempt, unattempt],
            backgroundColor: ['rgba(0,200,0,0.5)']
        }]
    }

    return (
        <Bar data={chartData} />
    )
}

export default BarChart