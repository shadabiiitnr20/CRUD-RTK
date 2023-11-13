import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreatePage from "./components/CreatePage";
import Header from "./components/Header";
import EditPage from "./components/EditPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
