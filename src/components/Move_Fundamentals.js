import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import diem from "../assets/img/diem.svg"

export const Move_Fundamentals = () => {
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
                <img src={diem} alt="logo" className="imagelogo"/>
              </div>
              <div>
                <div className="course__title">
                  <div className="course__title_1">
                    <h2 className="course__title_heading">web3 dev bootcamp</h2>
                    <h2 className="course__title_heading2">Move Fundamentals</h2>
                  </div>
                </div>
                <div className="course_content">
                  <div className="course_content1">
                    <p className="course_content1_title">ABOUT THE COURSE</p>
                    <p className="course_content1_text">Dayone Move Fundamentals is the <b>FIRST</b> comprehensive Move language course that teaches you the fundamentals of Move development on Web 3. This course is <b>OFFICIALLY ENDORSED</b> by the promising Layer 1 Aptos Labs and includes everything from Computer Science basics (algorithm and data structure) to cryptography to Move unique resource-oriented programming to a fully functional dApp development.</p>
                    <p className="course_content1_text">This course is suitable for all-level learners and will be the all-in-one resource to jumpstart your Web 3 career on the next generation layers. Content is released on a weekly basis with live sessions, video and written instructions and hands-on projects.</p>
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
                            <p className="course_content2_smalltitle2_p">6 weeks</p>
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
                          <p className="course_content2_quote">"As a self-taught coder, the bootcamp gave me the right base in blockchain-related development, that I would've definitely squandered a couple years without."</p>
                          <p className="course_content2_quoteName"><b>Krishang N.</b></p>
                          <p className="course_content2_quoteTitle">Founding Engineer, <a target="_blank" rel="noreferrer" href="https://thirdweb.com/" className="course_content2_quoteTitleCompany">@ThirdWeb</a></p>
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
                            <p className="course_content1_skills_stacksSpanText">MASTER CRYPTOGRAPHY</p>
                          </span>
                        </div>
                        <div className="course_content1_skills_stacksInfo">
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">MASTER MOVE</p>
                          </span>
                          <span className="course_content1_skills_stacksSpan">
                            <p className="course_content1_skills_stacksSpanText">BUIDL MOVE SMART CONTRACT</p>
                          </span>
                        </div>
                      </div>
                      <a href="#connect" rel="noreferrer">
                        <button className=""><span>Apply for early access</span></button>
                      </a>
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
                <p className="course__overview_detail1"><b>Chapter 1</b></p>
                <p className="course__overview_detail2">Variable, primitive types, conditionals and loop</p>
                <p className="course__overview_detail1"><b>Chapter 2</b></p>
                <p className="course__overview_detail2">Function, scope and lifecycle, abort and assert </p>
                <p className="course__overview_detail1"><b>Chapter 3</b></p>
                <p className="course__overview_detail2">Module and script</p>
                <p className="course__overview_detail1"><b>Chapter 4</b></p>
                <p className="course__overview_detail2">Resource oriented programming: structs and Resources, type abilities</p>
                <p className="course__overview_detail1"><b>Chapter 5</b></p>
                <p className="course__overview_detail2">Global storage structure and operators</p>
                <p className="course__overview_detail1"><b>Chapter 6</b></p>
                <p className="course__overview_detail2">Workshop: First Move module</p>
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