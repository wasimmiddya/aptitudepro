import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../contexts/AppContext";

let flag = true;

function Logout({ closeModal }) {
  const [success, setSuccess] = useState(true);
  const {setEmail, setUser} = useContext(AppContext)

  const handleLogOut = async () => {
    if (flag) {
      await fetch("http://localhost:3300/learner/logout", {
        method: 'GET', 
        mode: 'cors',
        "Content-Type": "application/json",
        credentials: "include"
      })
        .then((res) => {
          if (!res) {
            setSuccess(false);
          } else {
            setEmail(null)
            setUser(null)
            closeModal()
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return ReactDOM.createPortal(
    success ? (
      <>
        <div className="p-6 w-[35%] shadow-md rounded-md bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] space-y-3 z-50">
          <h3 className="text-xl font-semibold">Are you sure ?</h3>
          <p className="text-sm">
            Do you really want to logged out. Once you logout, all of your
            session will be deleted instantly.
          </p>
          <div className="flex justify-evenly">
            <button
              className="text-white bg-green-600 px-4 py-1 rounded-md"
              onClick={handleLogOut}
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
      </>
    ) : (
      <>
        <div className="p-6 w-[35%] shadow-md rounded-md bg-white fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] space-y-3 z-50">
          <h3 className="text-xl font-semibold">Failed to logout </h3>
          <p className="text-sm">Something went wrong, please try it again.</p>
          <div className="flex justify-evenly">
            <button
              className="text-white bg-green-600 px-6 py-1 rounded-md"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-[0.6] z-40" />
      </>
    ),
    document.getElementById("portal")
  );
}

export default Logout;
