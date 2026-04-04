import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import AXONT from "../Assets/AXONT1.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { motion } from "framer-motion";
import "../App.css";

const navLinks = [
  { to: "/", icon: <AiOutlineHome style={{ marginBottom: "2px" }} />, label: "Home" },
  { to: "/about", icon: <AiOutlineUser style={{ marginBottom: "2px" }} />, label: "About" },
  {
    to: "/project",
    icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />,
    label: "Projects",
  },
  { to: "/resume", icon: <CgFileDocument style={{ marginBottom: "2px" }} />, label: "Resume" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          {/* Animated Logo */}
          <Navbar.Brand href="/" className="d-flex logos">
            <motion.img
              src={AXONT}
              alt="brand"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 150 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              {/* Animated Nav Links */}
              {navLinks.map((link, i) => (
                <Nav.Item key={link.label}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <Nav.Link
                      as={Link}
                      to={link.to}
                      onClick={() => updateExpanded(false)}
                    >
                      {link.icon} {link.label}
                    </Nav.Link>
                  </motion.div>
                </Nav.Item>
              ))}

              {/* Animated GitHub Button */}
              <Nav.Item className="fork-btn">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Button
                    href="https://github.com/Ankit161409/portfolio"
                    target="_blank"
                    className="fork-btn-inner"
                  >
                    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                    <AiFillStar style={{ fontSize: "1.1em" }} />
                  </Button>
                </motion.div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;