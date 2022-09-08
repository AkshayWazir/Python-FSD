import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (location.pathname !== "/" && !token) {
      navigate("/loginPage");
    }
  }, []);

  return (
    <Routes>
      {AppRoutes.map((appRoute) => (
        <Route path={appRoute.path} element={appRoute.comp} />
      ))}
    </Routes>
  );
}

export default App;
