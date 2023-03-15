import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages/Index";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="children">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
