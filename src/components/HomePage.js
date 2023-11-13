import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../utils/userSlice";

const HomePage = () => {
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateUserNavigation = () => {
    navigate("/create");
  };

  const handleUserDeleteBtn = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="m-2 p-2">
      <button
        className="bg-red-600 w-36 p-2 m-2 rounded-lg shadow-lg font-medium"
        onClick={handleCreateUserNavigation}
      >
        Creata a User..!!
      </button>
      <hr />
      <div>
        {users.map((user) => {
          return (
            <div key={user.id} className="m-2">
              <div className="flex justify-between m-2">
                <h3 className="text-lg font-normal">{user.id}</h3>
                <h3 className="text-lg font-normal">{user.name}</h3>
                <h3 className="text-lg font-normal">{user.email}</h3>
                <button className="bg-red-600 w-24 p-2 rounded-lg shadow-lg font-medium">
                  <Link to={`/edit/${user.id}`}>Edit..!!</Link>
                </button>
                <button
                  className="bg-red-600 w-24 p-2 rounded-lg shadow-lg font-medium"
                  onClick={() => handleUserDeleteBtn(user.id)}
                >
                  Delete..!!
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
