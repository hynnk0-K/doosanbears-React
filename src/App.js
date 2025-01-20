import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpCheck from "./components/SignUpCheck";
import { AccessTokenProvider } from "./components/AccessTokenContext";
import BearsIntro from "./pages/BearsIntro";
import Game from "./pages/Game";
import GameFirst from "./components/GameFirst";
import Member from "./pages/Member";
import CoachStaff from "./components/Member/CoachStaff";
import Pitchers from "./components/Member/Pitchers";
import Batters from "./components/Member/Batters";
import Linkmyplayers from "./components/Member/Linkmyplayers";
import Education from "./components/Member/Education";

function App() {
  return (
    <AccessTokenProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path={`/signup/stepcheck`} element={<SignUpCheck />} />
        <Route path={`/bears/intro`} element={<BearsIntro />} />
        <Route path="/game/" element={<Game />}>
          <Route path="first" element={<GameFirst />}/>
        </Route>
        <Route path="/member/" element={<Member />}>
          <Route path="coachStaff" element={<CoachStaff />}/>
          <Route path="pitchers" element={<Pitchers />}/>
          <Route path="batters" element={<Batters />}/>
          <Route path="Linkrmyplayers" element={<Linkmyplayers />}/>
          <Route path="education" element={<Education />}/>
        </Route>
      </Routes>
      <Footer />
    </AccessTokenProvider>
  );
}

export default App;
