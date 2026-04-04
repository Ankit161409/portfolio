 

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Pixel.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const socialLinks = [
  {
    href: "https://github.com/Ankit161409",
    icon: <AiFillGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ankit-b76617294/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ankit161210@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                style={{ paddingBottom: 15 }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                I'M
                <strong className="main-name"> Ankit</strong>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                <Type />
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, rotate: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Find Me On
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              Feel free to <span className="purple">connect </span>with me
            </motion.p>

            <ul className="home-about-social-links">
              {socialLinks.map((link, i) => (
                <li className="social-icons" key={link.label}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + i * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;