import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Move_Student_Challenge } from "../components/Move_Student_Challenge";
import { Move_Challenge_Banner } from "../components/Move_Challenge_Banner";
import { MailchimpForm } from "../components/MailchimpForm";

export const MoveStudentChallenge = () => {
  return (
    <div>
      <Move_Challenge_Banner />
      <Move_Student_Challenge />
      <MailchimpForm />
      <Footer />
    </div>
  );
};
