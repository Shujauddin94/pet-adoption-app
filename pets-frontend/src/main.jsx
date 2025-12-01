import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PetList from "./components/PetList.jsx";
import PetDetail from "./components/PetDetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PetList />} />
      <Route path="/pet/:documentId" element={<PetDetail />} />
    </Routes>
  </BrowserRouter>
);
