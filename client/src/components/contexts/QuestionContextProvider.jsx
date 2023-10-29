/* eslint-disable react/prop-types */
import React , {useState} from "react"

const QuestionContext = React.createContext()

function QuestionContextProvider({children}) {
    const [paper, setPaper] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0)


  return (
    <QuestionContext.Provider value={{paper, setPaper, currentQuestion, setCurrentQuestion}}>
        {children}
    </QuestionContext.Provider>
  )
}

export default QuestionContextProvider