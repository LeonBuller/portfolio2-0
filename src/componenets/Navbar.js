import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const onUpdateActiveLink = (section)=>{
    setActiveLink(section)
  }
useEffect(()=>{
  const onScroll = (()=>{
    if(scrollY > 50){
      setScrolled(true)
    }else{setScrolled(false)}
  })
  window.addEventListener("scroll", onScroll)

  return()=>window.removeEventListener("scroll", onScroll)
},[])
  return (
    <Navbar expand="lg" className={scrolled? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img alt="logo" src={""}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Navbar.Link href="#home" className={activeLink ==="home" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('home')} >Home</Navbar.Link>
            <Navbar.Link href="#skills" className={activeLink ==="skills" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('skills')}>Skills</Navbar.Link>
            <Navbar.Link href="#projects" className={activeLink ==="projects" ? "active navbar-link": "navbar-link"} onClick={()=>onUpdateActiveLink('projects')}>Projects</Navbar.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img alt="" src={navIcon1}></img>
              </a>
              <a href="#">
                <img alt="" src={navIcon2}></img>
              </a>
              <a href="#">
                <img alt="" src={navIcon3}></img>
              </a>
            </div>
            <button className="vvd" onClick={()=>(console.log("Connect");)}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
