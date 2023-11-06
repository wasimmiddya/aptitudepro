/* eslint-disable react/prop-types */
import { useState } from "react";
import ExamContext from "./ExamContext";

function EaxamContextProvider({ children }) {
  const [paper, setPaper] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <ExamContext.Provider
      value={{paper, setPaper, currentQuestion, setCurrentQuestion}}
    >
      {children}
    </ExamContext.Provider>
  );
}

export default EaxamContextProvider;
