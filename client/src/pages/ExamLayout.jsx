/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  Suspense,
  useMemo,
} from "react";

import CountdownTimer from "../components/CountdownTimer";
import QestionNo from "../components/QestionNo";
const Question = React.lazy(() => import("../components/Question"));

import AppContext from "../contexts/AppContext";
import Submit from "../components/modals/Submit";
import VioletMsg from "../components/modals/VioleteMsg";
import ExamContext from "../contexts/ExamContext";

function ExamLayout() {
  const [submit, setSubmit] = useState(false);
  const { email, user, option } = useContext(AppContext);
  const { paper, setPaper, currentQuestion, setCurrentQuestion } =
    useContext(ExamContext);
  const [violet, setViolet] = useState(false);
  const [video, setVideo] = useState("http://127.0.0.1:5000/video_feed");

  let flag = true;
  let rels = false;

  useEffect(() => {
    console.log("Created");

    return () => {
      if (rels) {
        fetch("http://127.0.0.1:5000/release")
          .then((res) => res.text())
          .catch((err) => console.log(err));
        // setPaper(null);
      }
      rels = true;
    };
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/check", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg === "VIOLENCE") {
          setViolet(true);
        }
      });
  }, [violet]);

  // Effect for webcamera and face detectiion
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // For stopping the user to inspect the html elemets from the browser
    document.addEventListener("contextmenu", handleContextMenu);

    document.addEventListener =
      ("keydown",
      (e) => {
        if (e.key == 123) {
          e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key == "I") {
          e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key == "C") {
          e.preventDefault();
        }
        if (e.ctrlKey && e.shiftKey && e.key == "J") {
          e.preventDefault();
        }
        if (e.ctrlKey && e.key == "U") {
          e.preventDefault();
        }
      });

    async function getExamPaper() {
      if (flag) {
        flag = false;
        const response = await fetch("http://localhost:3300/exam/qes", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(option),
        });

        setVideo("http://127.0.0.1:5000/video_feed");
        response
          .json()
          .then((data) => setPaper(data))
          .catch((err) => console.error(err));
      }
    }

    getExamPaper();

    return () => {
      console.log("destroyed context menu");
    };
  }, []);

  const questionNo = useCallback(
    Array.from({ length: paper?.totalQuestions }, (v, i) => i),
    [paper]
  );

  const handleSelectedQuestionNo = (num) => {
    setCurrentQuestion(num);
  };

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < paper?.totalQuestions - 1) {
      setCurrentQuestion((preQuestion) => preQuestion + 1);
    }
  }, [currentQuestion, paper]);

  const handlePrevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((preQuestion) => preQuestion - 1);
    }
  }, [currentQuestion, paper]);

  const displayNumberPattern = useMemo(
    () =>
      questionNo?.map((e, k) => {
        return (
          <QestionNo
            key={k}
            number={e}
            handleQuestionNo={handleSelectedQuestionNo}
          />
        );
      }),
    [paper]
  );

  return (
    <>
      <div className="w-full pt-20  flex select-none">
        {/* Righ side bar */}
        <div className="w-[20%] bg-slate-100 pt-8">
          {/* Web camera container */}
          <div className="w-[60%] h-28  mx-auto rounded-md text-center text-white">
            <img
              src={video}
              alt="webcam"
              className="w-full h-full rounded-lg border-4 border-red-400"
            />
          </div>
          {/* Question No. plate container */}
          <div className="w-[80%] h-[65%] mx-auto my-auto border-2 border-stone-500 rounded-md mt-4 p-3 grid grid-cols-4 grid-rows-6 gap-2 ">
            {displayNumberPattern}
          </div>
        </div>

        {/* Exam view port */}
        <div className="w-[60%] pt-12 relative">
          {/* Actual question */}
          <Suspense
            fallback={
              <h3 className="text-xl text-center fixe left-[50%] top-[50%] translate-x-[-50%] translate-y-[50%]">
                Loading questions...
              </h3>
            }
          >
            {paper && <Question />}
          </Suspense>

          {/* Footer buttons */}
          <div className="flex px-10 justify-between border-t-2 absolute bottom-0 w-full">
            <button
              className="py-1 px-3 my-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              onClick={handlePrevQuestion}
            >
              Previous
            </button>
            <button className="py-1 px-3 my-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Marked
            </button>
            <button
              className="py-1 px-3 my-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </div>

        {/* Right side bar */}
        <div className="w-[20%] bg-slate-100 pt-12">
          {/* Timer container */}
          <div className="text-center">
            <CountdownTimer />
          </div>
          {/* Profile container */}
          <div className="flex items-center flex-col mt-10">
            <img
              className="rounded-full w-20 border-2 border-pink-600"
              src="images/student.png"
              alt=""
            />
            <h4 className="text-lg font-semibold mt-2">{user}</h4>
            <p className="text-xs">{email}</p>
          </div>
          <div className="flex justify-center mt-36">
            <button
              className="px-4 py-1 rounded-md bg-green-600 text-white font-semibold active:bg-green-700"
              onClick={() => setSubmit(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {paper && submit && <Submit closeModal={() => setSubmit(false)} />}
      {paper && violet && <VioletMsg closeModal={() => setViolet(false)} />}
    </>
  );
}
export default ExamLayout;
