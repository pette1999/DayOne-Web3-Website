import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import stanford from "../assets/img/stanford.svg"

export const Stanford_Move_Bootcamp = () => {
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
    <section className="course" id="bootcamps">
      <Container>
        <Row className="align-items-center">
          <Col size={12} xl={9}>
            <div className="content1">
              <div className="divImg">
                <img src={stanford} alt="logo" className="imagelogo"/>
              </div>
              <div>
                <div className="course__title">
                  <div className="course__title_1">
                    <h2 className="course__title_heading">web3 dev bootcamp</h2>
                    <h2 className="course__title_heading2">Stanford Move Challenge Bootcamp</h2>
                  </div>
                </div>
                <div className="course_content">
                  <div className="course_content1">
                    <p className="course_content1_title">ABOUT THE COURSE</p>
                    <p className="course_content1_text">Stanford Move Challenge Bootcamp is a customized 6-week workshop exclusively for Stanford students in Fall 2022. This course is a lightweight version course combining Dayone Move Fundamentals and Aptos Projects Bootcamp.</p>
                    <p className="course_content1_text">The course includes everything from cryptography to Move unique resource-oriented programming to a fully functional dApp development which helps all Stanford students (tech or non-tech background) to get familiar with the Web 3 world and dive deep in your interested areas.</p>
                    <p className="course_content1_text">We also support a talent community for all Stanford students where you would find your teammates for Hackathon or even future co-founders. Don’t hesitate to RSVP for the Move course and Hackathon!</p>
                    {
                      !isDesktop && (
                        <div className="course_content2">
                          <div className="course_content2_smalltitle_mobile">
                            <img src="https://university.alchemy.com/assets/dollar_sign.98fd40c5.svg" alt="dollar_sign.98fd40c5.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle_p">Free for Stanford students</p>
                          </div>
                          <p className="course_content2_smalltitle_title">price</p>
                          <div className="course_content2_smalltitle2">
                            <img src="https://university.alchemy.com/assets/watch.9764a10b.svg" alt="watch.9764a10b.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle2_p">6 weeks</p>
                          </div>
                          <p className="course_content2_smalltitle_title">time to complete</p>
                          <div className="course_content2_smalltitle2">
                            <img src="https://university.alchemy.com/assets/star.50fa7181.svg" alt="star.50fa7181.svg" className="ourse_content2_smalltitle_img"/>
                            <p className="course_content2_smalltitle2_p">Beginner</p>
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
                            <p className="course_content1_skills_stacksSpanText">BUIDL MOVE SMART CONTRACT</p>
                          </span>
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">BUIDL DAPP ON APTOS</p>
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
                        <div className="course_content2_smalltitle">
                          <img src="https://university.alchemy.com/assets/dollar_sign.98fd40c5.svg" alt="dollar_sign.98fd40c5.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle_p">Free for Stanford students</p>
                        </div>
                        <p className="course_content2_smalltitle_title">price</p>
                        <div className="course_content2_smalltitle2">
                          <img src="https://university.alchemy.com/assets/watch.9764a10b.svg" alt="watch.9764a10b.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle2_p">6 weeks</p>
                        </div>
                        <p className="course_content2_smalltitle_title">time to complete</p>
                        <div className="course_content2_smalltitle2">
                          <img src="https://university.alchemy.com/assets/star.50fa7181.svg" alt="star.50fa7181.svg" className="ourse_content2_smalltitle_img"/>
                          <p className="course_content2_smalltitle2_p">Beginner</p>
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
                </div>
              </div>
            </div>
          </Col>
          {/* <Col md="auto">Variable width content</Col> */}
          <Col size={12} xl={3}>
            <div className="course__overview">
              <h2 className="course__overview_h2">Curriculum Overview</h2>
              <div className="course__overview_detail">
                <p className="course__overview_detail1"><b>Week 1</b></p>
                <p className="course__overview_detail2">Blockchain fundamentals</p>
                <p className="course__overview_detail1"><b>Week 2</b></p>
                <p className="course__overview_detail2">Move basics</p>
                <p className="course__overview_detail1"><b>Week 3</b></p>
                <p className="course__overview_detail2">Move advanced</p>
                <p className="course__overview_detail1"><b>Week 4</b></p>
                <p className="course__overview_detail2">First Move module on Aptos</p>
                <p className="course__overview_detail1"><b>Week 5</b></p>
                <p className="course__overview_detail2">First dApp on Aptos 1</p>
                <p className="course__overview_detail1"><b>Week 6</b></p>
                <p className="course__overview_detail2">First dApp on Aptos 2</p>
                {/* <p className="course__overview_detail1"><b>Week 7</b></p>
                <p className="course__overview_detail2">Build the future: identity, voting, exchanges, and wallets</p> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}