import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formValidation } from "../utils/formValidation";
import { editUser } from "../utils/userSlice";

const EditPage = () => {
  const { id } = useParams();
  const users = useSelector((store) => store.users);

  const currentUser = users.find((user) => user.id == id);

  const { name, email } = currentUser;

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditUserBtn = () => {
    if (userEmail === "" || userName === "") {
      alert("Please enter both the fields");
      return;
    }
    const message = formValidation(userName, userEmail);
    setErrorMsg(message);
    if (message) return;

    dispatch(editUser({ id: id, name: userName, email: userEmail }));
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
          value={userName}
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
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <p className="m-1 p-1 text-red-600 text-lg">{errorMsg}</p>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg text-base w-20"
        onClick={handleEditUserBtn}
      >
        Edit
      </button>
    </form>
  );
};

export default EditPage;
