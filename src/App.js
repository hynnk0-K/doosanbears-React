import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpCheck from "./components/SignUpCheck";
import { AccessTokenProvider } from "./components/AccessTokenContext";
import Bears from "./pages/Bears";
import Intro from "./components/Bears/Intro";
import Story from "./components/Bears/Story";
import Brand from "./components/Bears/Brand";
import Stadium from "./components/Bears/Stadium";
import Member from "./pages/Member";
import CoachStaff from "./components/Member/CoachStaff";
import Pitchers from "./components/Member/Pitchers";
import Batters from "./components/Member/Batters";
import ArmyPlayers from "./components/Member/ArmyPlayers";
import Education from "./components/Member/Education";
import Game from "./pages/Game";
import First from "./components/Game/First";
import Futures from "./components/Game/Futures";
import Cheering from "./components/Game/Cheering";
import Event from "./pages/Event";
import BearsTv from "./components/Event/BearsTv";
import Gallery from "./components/Event/Gallery";
import Events from "./components/Event/Events";
import Ticket from "./pages/Ticket";
import Reserve from "./components/Ticket/Reserve";
import Group from "./components/Ticket/Group";
import Lounge from "./components/Ticket/Lounge";
import Season from "./components/Ticket/Season";
import Doorun from "./pages/Doorun";
import Notice from "./components/Doorun/Notice";
import Faq from "./components/Doorun/Faq";
import News from "./components/Doorun/News";
import NoticeDetail from "./components/Doorun/NoticeDetail";
import FaqDetail from "./components/Doorun/FaqDetail";
import EventsDetail from "./components/Event/EventsDetail";
import FaqWrite from "./components/Doorun/FaqWrite";

function App() {
  return (
    <AccessTokenProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path={`/signup/stepcheck`} element={<SignUpCheck />} />

        <Route path="/bears/" element={<Bears />}>
          <Route path="intro" element={<Intro />}/>
          <Route path="story" element={<Story />}/>
          <Route path="brand" element={<Brand />}/>
          <Route path="stadium" element={<Stadium />}/>
        </Route>
        <Route path="/member/" element={<Member />}>
          <Route path="coachStaff" element={<CoachStaff />}/>
          <Route path="pitchers" element={<Pitchers />}/>
          <Route path="batters" element={<Batters />}/>
          <Route path="armyplayers" element={<ArmyPlayers />}/>
          <Route path="education" element={<Education />}/>
        </Route>
        <Route path="/game/" element={<Game />}>
          <Route path="first" element={<First />}/>
          <Route path="futures" element={<Futures />}/>
          <Route path="cheering" element={<Cheering />}/>
        </Route>
        <Route path="/event/" element={<Event/>}>
          <Route path="bearstv" element={<BearsTv />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="events" element={<Events />}/>
          <Route path="events/:id" element={<EventsDetail />}/>
        </Route>
        <Route path="/ticket/" element={<Ticket />}>
          <Route path="reserve" element={<Reserve />}/>
          <Route path="group" element={<Group />}/>
          <Route path="lounge" element={<Lounge />}/>
          <Route path="season" element={<Season />}/>
        </Route>
        <Route path="/doorundoorun/" element={<Doorun />}>
          <Route path="notice/" element={<Notice />}/>
          <Route path="notice/:id" element={<NoticeDetail />}/>
          <Route path="faq" element={<Faq />}/>
          <Route path="faq/:id" element={<FaqDetail />}/>
          <Route path="faq/write" element={<FaqWrite />}/>
          <Route path="news" element={<News />}/>
        </Route>
      </Routes>
      <Footer />
    </AccessTokenProvider>
  );
}

export default App;
