import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHeaderNavigation = () => {
    navigate("/");
  };

  return (
    <header
      className="m-2 p-2 text-xl font-semibold underline hover:cursor-pointer text-red-600"
      onClick={handleHeaderNavigation}
    >
      CRUD USING RTK PRACTICE
    </header>
  );
};

export default Header;
