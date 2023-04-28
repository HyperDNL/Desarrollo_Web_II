import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, UserFormPage, NotFoundPage } from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-form" element={<UserFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
