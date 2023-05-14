import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainAdmin from "./pages/admin/MainAdmin";
import MainUser from "./pages/user/MainUser";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<MainUser />} />
        <Route path="/pages/*" element={<MainAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
