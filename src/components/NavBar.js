import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/dayzero.png";
import dayzero from "../assets/img/day1.png";
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";
import { HashLink } from "react-router-hash-link";
import { Home } from '../pages/Home'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={dayzero} alt="Logo" className="logo-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="/#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>
              Skills
            </Nav.Link>
            <Nav.Link href="/#bootcamps" className={activeLink === "bootcamps" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("bootcamps")}>
              Bootcamps
            </Nav.Link>
            <Nav.Link href="/move_challenge" className={activeLink === "move_challenge" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("move_challenge")}>
              Move Challenge
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://twitter.com/move_dayone" target="_blank" rel="noreferrer">
                <img src={twitter} alt="" />
              </a>
              {/* <a href="#"><img src={discord} alt="" /></a> */}
              <a href="https://www.linkedin.com/company/dayone-edu" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <HashLink to="/move_challenge#connect">
              <button className="">
                <span>Join Our Community</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
