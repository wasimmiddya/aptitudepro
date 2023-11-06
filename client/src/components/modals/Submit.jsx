import ReactDOM from "react-dom";
import QuestionContext from "../../contexts/ExamContext";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function Submit({ closeModal }) {
  const navigate = useNavigate();
  const { setReport } = useContext(AppContext);
  const { paper } = useContext(QuestionContext);

  const handleSubmit = async () => {
    await fetch("http://localhost:3300/exam/eval", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paper),
    })
      .then((res) => res.json())
      .then((res) => {
        setReport(res.report);
        navigate("/result/progressboard");
      })
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <>
      <div className="p-6 w-[35%] shadow-md rounded-md bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] space-y-3 z-50">
        <h3 className="text-xl font-semibold">Are you sure ?</h3>
        <p className="text-sm">
          Do really want to submit the paper? Once you submit the paper you will
          never be able to make any change or correction, make sure your review
          all your questions and answers then submit.
        </p>
        <div className="flex justify-evenly">
          <button
            className="text-white bg-green-600 px-4 py-1 rounded-md"
            onClick={handleSubmit}
          >
            Yes
          </button>
          <button
            className="text-white bg-red-600 px-4 py-1 rounded-md"
            onClick={closeModal}
          >
            No
          </button>
        </div>
      </div>
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-[0.6] z-40" />
    </>,
    document.getElementById("portal")
  );
}

export default Submit;
