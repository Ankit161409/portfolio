import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/MyPicz.jpeg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* Left: Text */}
          <Col md={8} className="home-about-description">
            <motion.h1
              style={{ fontSize: "2.6em" }}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </motion.h1>

            <motion.p
              className="home-about-body"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              I'm a Software Engineer who loves transforming ideas into reliable,
              scalable products. Over time, I've explored several technologies
              and found my passion in building high-performance systems and
              intuitive user experiences.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple"> Java, Springboot & Microservices </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple"> Web Applications</b>
              </i>
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js</b>
            </motion.p>
          </Col>

          {/* Right: Avatar */}
          <Col md={4} className="myAvtar">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid top" alt="avatar" style={{height:"300px"}} />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;