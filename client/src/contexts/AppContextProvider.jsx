/* eslint-disable react/prop-types */
import { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("John Doe");
  const [load, setLoad] = useState(true);
  const [report, setReport] = useState(null);
  const [inExam, setInExam] = useState(false);

  return (
    <AppContext.Provider
      value={{
        email,
        setEmail,
        user,
        setUser,
        option: { category: "", level: "" },
        load,
        setLoad,
        report,
        setReport,
        inExam,
        setInExam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
