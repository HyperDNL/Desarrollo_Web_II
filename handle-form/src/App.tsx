import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { HomePage, UserFormPage, NotFoundPage, UsersPage } from "./pages/Pages";
import { Container } from "@mui/material";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="xl" style={{ marginTop: 20 }}>
          <Toaster />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/user-form/:id" element={<UserFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </FluentProvider>
  );
}

export default App;
