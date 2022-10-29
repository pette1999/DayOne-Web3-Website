// import { NavBar } from "./components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { MailchimpForm } from "../components/MailchimpForm";
import { Move_Fundamentals } from "../components/Move_Fundamentals";
import { Aptos_Project_Bootcamp } from "../components/Aptos_Project_Bootcamp";
import { Stanford_Move_Bootcamp } from "../components/Stanford_Move_Bootcamp";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Skills />
      {/* <Projects /> */}
      <Stanford_Move_Bootcamp />
      <Move_Fundamentals />
      <Aptos_Project_Bootcamp />
      {/* <MailchimpForm /> */}
      <Footer />
    </div>
  );
};