import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLocalStorage();
  }, []);

  const handleLogin = (email, password) => {
    getLocalStorage();

    if (email == "admin@company.com" && password == "2308") {
      console.log("This is Admin");
    } else if (email == `employee1@company.com` && password == "2308") {
      console.log("this is employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {/* <EmployeeDashboard/> */}

      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
