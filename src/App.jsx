import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@company.com" && password == "2308") {
      console.log("This is Admin");
    } else if (email == `employee${id}@company.com` && password == "2308") {
      console.log("this is employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}

      {/* <EmployeeDashboard/> */}

      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
