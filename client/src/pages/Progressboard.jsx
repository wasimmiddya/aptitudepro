import { useContext } from "react"
import BarChart from "../components/BarChart"
import DoughnutChart from "../components/DoughnutChart"
import AppContext from "../contexts/AppContext"


function Progressboard() {
  const { report } = useContext(AppContext)

  const {
    // paperName,
    // level,
    marks,
    grade
  } = report

  console.log(report);

  return (
    report && 
    <div className="w-full pt-28 text-center ">
      <h2 className="text-4xl font-semibold mb-2">Your Progress Report</h2>
      <div className="flex justify-evenly text-xl my-8 font-semibold">
        <div>
          <label htmlFor="marks">Marks : </label>
          <span> {marks}</span>
        </div>
        <div>
          <label htmlFor="marks">Grade : </label>
          <span> {grade}</span>
        </div>
        <div>
          <label htmlFor="marks">Total Questions : </label>
          <span> 25</span>
        </div>
        <div>
          <label htmlFor="marks">Total Marks : </label>
          <span> 100</span>
        </div>
      </div>
      <div className="flex justify-evenly">
          <div className="w-[40%] text-center my-2 font-semibold">
            <h4>Question Attemption Analysis</h4>
            <BarChart />
          </div>
          <div className="w-[18%] text-sm text-center my-2 font-semibold">
            <h4>Categorical Marks Analysis</h4>
            <DoughnutChart />
          </div>
      </div>
    </div>
  )
}

export default Progressboard