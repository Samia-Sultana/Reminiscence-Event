import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
    useNavigate
  } from "react-router-dom";
import UserPage from "../../UserComponents/UserPage/UserPage";

const PrivateRoute =({ children, ...rest }) =>{

  const sessionEmail = sessionStorage.getItem('email');
  const accessToken = sessionStorage.getItem('accessToken');
  const location = useLocation();
 // sessionStorage.removeItem('email');
  //sessionStorage.removeItem('accessToken');
    return (
      (sessionEmail && accessToken) ? children : 
      <Navigate to={{ pathname: "/login" }} replace state={{ from: location.pathname }} />
    );
  }

export default PrivateRoute;