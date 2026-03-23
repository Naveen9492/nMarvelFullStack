// ProtectedRoute.js
import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookie.get("adminToken");

  // If no token, redirect to admin login
  if (!token) {
    return <Redirect to="/admin/login" />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
