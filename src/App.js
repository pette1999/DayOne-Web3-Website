import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { MailchimpForm } from "./components/MailchimpForm";
// import { Move_Fundamentals } from "./components/Move_Fundamentals";
// import { Aptos_Project_Bootcamp } from "./components/Aptos_Project_Bootcamp";
// import { Stanford_Move_Bootcamp } from "./components/Stanford_Move_Bootcamp";
import { Home } from "./pages/Home";
import { MoveStudentChallenge } from "./pages/MoveStudentChallenge";

function App() {
  useEffect(() => {
    if (document.location.hash === "#bootcamp" || document.location.hash === "#connect") {
      setTimeout(() => {
        document
          .querySelector("#connect")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  });

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/move_challenge' element={<MoveStudentChallenge />}></Route>
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
