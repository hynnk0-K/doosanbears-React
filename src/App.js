import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpCheck from "./components/SignUpCheck";
import { AccessTokenProvider } from "./components/AccessTokenContext";

function App() {
  return (
    <AccessTokenProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path={`/signup/stepcheck`} element={<SignUpCheck />} />
      </Routes>
      <Footer />
    </AccessTokenProvider>
  );
}

export default App;
