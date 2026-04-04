import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const socialLinks = [
  {
    href: "https://github.com/Ankit161409",
    icon: <AiFillGithub />,
    label: "GitHub",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ankit161210@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/ankit-b76617294/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
];

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Made with love */}
        {/* <Col md="4" className="footer-copywright">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Made with ❤️ by Ankit
          </motion.h3>
        </Col> */}

        {/* Copyright */}
        <Col md="6" className="footer-copywright">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
          >
            Copyright © {year} AK
          </motion.h3>
        </Col>

        {/* Social Icons */}
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map((link, i) => (
              <li className="social-icons" key={link.label}>
                <motion.a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.3, rotate: 10 }}
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
  );
}

export default Footer;