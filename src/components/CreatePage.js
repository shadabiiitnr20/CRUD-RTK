import React, { useState } from "react";
import { formValidation } from "../utils/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const CreatePage = () => {
  const users = useSelector((store) => store.users);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateUserBtn = () => {
    if (userEmail === "" || userName === "") {
      alert("Please enter both the fields");
      return;
    }
    const message = formValidation(userName, userEmail);
    setErrorMsg(message);
    if (message) return;

    dispatch(
      addUser({ id: users.length + 1, name: userName, email: userEmail })
    );
    navigate("/");
  };

  return (
    <form
      className="bg-slate-500 h-[360px] w-[400px] rounded-lg shadow-lg mx-auto right-0 left-0 my-16 bg-opacity-25"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="m-2 p-2 text-2xl underline font-semibold">Add User</h3>
      <div className="m-1 p-1">
        <label className="m-2 text-lg font-medium underline">Name</label>
        <br />
        <input
          type="text"
          placeholder="name.."
          className="w-2/3 m-2 p-2 border border-black rounded-lg shadow-lg"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="m-1 p-1">
        <label className="m-2 text-lg font-medium underline">Email</label>
        <br />
        <input
          type="text"
          placeholder="email.."
          className="w-2/3 m-2 p-2 border border-black rounded-lg shadow-lg"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <p className="m-1 p-1 text-red-600 text-lg">{errorMsg}</p>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg text-base"
        onClick={handleCreateUserBtn}
      >
        Submit
      </button>
    </form>
  );
};

export default CreatePage;
