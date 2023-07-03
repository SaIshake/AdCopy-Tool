

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AdCopy from "./pages/AdCopy";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginVerification from "./pages/LoginVerification";


const App = () => {
  const {user, success} = useSelector(state => state.user)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/verification" element={(!user.isVerified) && (Object.keys(user).length > 0) ? <LoginVerification/> : <Navigate to="/Ad-Copy"  />}/>
      <Route path="/login" element={!user.isVerified ? <Login/> : <Navigate to="/Ad-Copy"  />}/>
      <Route path="/register" element={!user.isVerified ? <Register/> : <Navigate to="/Ad-Copy" />}/>
      <Route path="/Ad-Copy" element={user.isVerified ? <AdCopy/> : <Navigate to="/login" />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;