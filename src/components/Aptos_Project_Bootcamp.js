import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aptos from "../assets/img/aptos.svg"

export const Aptos_Project_Bootcamp = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1100) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 1100) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  },[]);

  return (
    <section className="course" id="course">
      <Container>
        <Row className="align-items-center">
          <Col size={12} xl={9}>
            <div className="content1">
              <div className="divImg">
                <img src={aptos} alt="logo" className="imagelogo"/>
              </div>
              <div>
                <div className="course__title">
                  <div className="course__title_1">
                    <h2 className="course__title_heading">web3 dev bootcamp</h2>
                    <h2 className="course__title_heading2">Aptos Projects Bootcamp</h2>
                  </div>
                </div>
                <div className="course_content">
                  <div className="course_content1">
                    <p className="course_content1_title">ABOUT THE COURSE</p>
                    <p className="course_content1_text">Dayone Aptos Projects Bootcamp is the first project-based bootcamp building next generation transaction, NFT, Coin and dApp. This course provides deep understanding on the working mechanism of blockchain, instructions on the cutting-edge of Web 3 tech stacks and hands-on experience on industrial level projects.</p>
                    <p className="course_content1_text">Besides that, you’ll join Dayone talents community, meet, learn and collaborate with fellow developers. This course will lay a solid foundation for you to get a job in Web 3 companies or start your own business.</p>
                    {
                      !isDesktop && (
                        <div className="course_content2">
                          {/* <div className="course_content2_smalltitle_mobile">
                            <img src="https://university.alchemy.com/assets/dollar_sign.98fd40c5.svg" alt="dollar_sign.98fd40c5.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle_p">Free</p>
                          </div>
                          <p className="course_content2_smalltitle_title">price</p> */}
                          <div className="course_content2_smalltitle2">
                            <img src="https://university.alchemy.com/assets/watch.9764a10b.svg" alt="watch.9764a10b.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle2_p">8 weeks</p>
                          </div>
                          <p className="course_content2_smalltitle_title">time to complete</p>
                          <div className="course_content2_smalltitle2">
                            <img src="https://university.alchemy.com/assets/star.50fa7181.svg" alt="star.50fa7181.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle2_p">Intermediate</p>
                          </div>
                          <p className="course_content2_smalltitle_title">skill level</p>
                          <div className="course_content2_smalltitle2">
                            <img src="	https://university.alchemy.com/assets/person.8b11f521.svg" alt="person.8b11f521.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle2_p">None</p>
                          </div>
                          <p className="course_content2_smalltitle_title">prerequisites</p>
                          <hr aria-orientation="horizontal" className="hr_space"/>
                          {/* <p className="course_content2_quote">"As a self-taught coder, the bootcamp gave me the right base in blockchain-related development, that I would've definitely squandered a couple years without."</p>
                          <p className="course_content2_quoteName"><b>Krishang N.</b></p>
                          <p className="course_content2_quoteTitle">Founding Engineer, <a target="_blank" rel="noreferrer" href="https://thirdweb.com/" className="course_content2_quoteTitleCompany">@ThirdWeb</a></p> */}
                        </div>
                      )
                    }
                    <div>
                      <p className="course_content1_skills_text">SKILLS YOU'LL LEARN</p>
                      <div className="course_content1_skills_stacks">
                        <div className="course_content1_skills_stacksInfo">
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">BECOME INTERVIEW READY</p>
                          </span>
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">MASTER MOVE</p>
                          </span>
                        </div>
                        <div className="course_content1_skills_stacksInfo">
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">BUIDL SMART CONTRACT</p>
                          </span>
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">BUIDL DAPP</p>
                          </span>
                        </div>
                      </div>
                      {/* <a href="#connect" rel="noreferrer">
                        <button className=""><span>Apply for early access</span></button>
                      </a> */}
                    </div>
                  </div>
                  {
                    isDesktop && (
                      <div className="course_content2_mobile">
                        {/* <div className="course_content2_smalltitle">
                          <img src="https://university.alchemy.com/assets/dollar_sign.98fd40c5.svg" alt="dollar_sign.98fd40c5.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle_p">Free</p>
                        </div>
                        <p className="course_content2_smalltitle_title">price</p> */}
                        <div className="course_content2_smalltitle2">
                          <img src="https://university.alchemy.com/assets/watch.9764a10b.svg" alt="watch.9764a10b.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle2_p">8 weeks</p>
                        </div>
                        <p className="course_content2_smalltitle_title">time to complete</p>
                        <div className="course_content2_smalltitle2">
                          <img src="https://university.alchemy.com/assets/star.50fa7181.svg" alt="star.50fa7181.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle2_p">Intermediate</p>
                        </div>
                        <p className="course_content2_smalltitle_title">skill level</p>
                        <div className="course_content2_smalltitle2">
                          <img src="	https://university.alchemy.com/assets/person.8b11f521.svg" alt="person.8b11f521.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle2_p">Master Move language</p>
                        </div>
                        <p className="course_content2_smalltitle_title">prerequisites</p>
                        <hr aria-orientation="horizontal" className="hr_space"/>
                        {/* <p className="course_content2_quote">"As a self-taught coder, the bootcamp gave me the right base in blockchain-related development, that I would've definitely squandered a couple years without."</p>
                        <p className="course_content2_quoteName"><b>Krishang N.</b></p>
                        <p className="course_content2_quoteTitle">Founding Engineer, <a target="_blank" rel="noreferrer" href="https://thirdweb.com/" className="course_content2_quoteTitleCompany">@ThirdWeb</a></p> */}
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </Col>
          {/* <Col md="auto">Variable width content</Col> */}
          <Col size={12} xl={3}>
            <div className="course__overview">
              <h2 className="course__overview_h2">Curriculum Overview</h2>
              <div className="course__overview_detail">
                <p className="course__overview_detail1"><b>Chapter 1</b></p>
                <p className="course__overview_detail2">Blockchain cryptography fundamentals and advanced</p>
                <p className="course__overview_detail1"><b>Chapter 2</b></p>
                <p className="course__overview_detail2">Build your first NFT</p>
                <p className="course__overview_detail1"><b>Chapter 3</b></p>
                <p className="course__overview_detail2">Build your first dApp</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}