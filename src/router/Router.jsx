import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import Login from "../views/auth/Login";
import Dashboard from "../views/dashboard/Dashboard";
import { MainLayout } from "./../layouts/mainLayout/MainLayout";
import { Collections } from "./../views/collections/Collections";

const Router = () => {
  //   const Routes = [{}
  //     Auth:
  //     { path: "/login", element: <Login /> },
  //     { path: "/", element: <Dashboard /> },
  //   ];
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route exact path="/explore" element={<MainLayout />}>
          <Route index element={<Collections />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
