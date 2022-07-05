import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Login from './view/Login';

interface IApplication { }

const Application: React.FunctionComponent<IApplication> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;