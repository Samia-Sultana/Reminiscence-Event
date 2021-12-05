import {React,Fragment, useContext, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminPage from './Components/AdminComponents/AdminPage/AdminPage';
import UserPage from './Components/UserComponents/UserPage/UserPage';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/SharedComponents/Login/Login';
import SignUp from './Components/SharedComponents/SignUp/SignUp';
import ProtectedRoute from './Components/LandingPage/ProtectedRoute/ProtectedRoute';
import ProtectRoute from './Components/AdminComponents/ProtectRoute/ProtectRoute';
import PrivateRoute from './Components/LandingPage/PrivateRoute/PrivateRoute';
import ChooseDate from './Components/UserComponents/ChooseDate/ChooseDate';
import { createContext } from 'react';
export const SelectedEvent = createContext();
function App() {
  const [selectedEvent,setSelectedEvent] = useState({});
 
  return (
    <div className="app">
      <SelectedEvent.Provider value={[selectedEvent, setSelectedEvent]}>
      <Router>
      <Routes>
      <Route path="/admin/:selectedNav" element={ <ProtectedRoute> <AdminPage/> </ProtectedRoute>} />
        <Route path="/user/:selectedNav" element={ <PrivateRoute> <UserPage/> </PrivateRoute> } />
        <Route path="/chooseDate" element={ <PrivateRoute> <ChooseDate/> </PrivateRoute> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </Router>
    </SelectedEvent.Provider>
    </div>

  );
}

export default App;
