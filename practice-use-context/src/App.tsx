import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/usersContext";
import { HomeScreen, NotFoundPage } from "./pages/Index";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="children-container">
          <UsersProvider>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </UsersProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
