import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Brands } from "./Brands";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <Brands />
                  <div className="skill-bx wow zoomIn">
                      <h2>One Platform does it all</h2>
                      <p>Our lead instructors are from Meta and Google, our advisors are from Aptos, Nansen, Certik etc. <br></br>Outcome-driven Move bootcamp with clear deliverables and milestones. <br></br>Build a Web 3+ community to unblock your potential.</p>
                      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item">
                              <img src={meter1} alt="Image" />
                              <h5>World-leading, certified systematic courses</h5>
                          </div>
                          <div className="item">
                              <img src={meter2} alt="Image" />
                              <h5>High-quality deliverables and milestones</h5>
                          </div>
                          <div className="item">
                              <img src={meter3} alt="Image" />
                              <h5>Meet talents like you in the Web 3+ community</h5>
                          </div>
                      </Carousel>
                  </div>
              </div>
          </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
