import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const activities = [
  { icon: <ImPointRight />, text: "Playing Games 🎮" },
  { icon: <ImPointRight />, text: "Traveling and Exploring New Places 🌍" },
];

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">

            {/* Intro Paragraph */}
            <motion.p
              style={{ textAlign: "justify" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              Hi everyone! I'm <span className="purple">Ankit</span>{" "}
              from <span className="purple">Ballabgarh, India</span>.
              <br /><br />
              I'm a B.Tech graduate{" "}
              <span className="purple">
                Computer Science and Engineering (CSE)
              </span>{" "}
              from{" "}
              <span className="purple">
                Advanced Institute of Technology and Management
              </span>.
              <br /><br />
              and an aspiring{" "}
              <span className="purple">Java Developer,</span> currently focused
              on improving my skills and building strong projects.
              <br /><br />
              Outside of coding, I love engaging in activities that keep me
              creative and inspired:
            </motion.p>

            {/* Activity List */}
            <ul>
              {activities.map((item, i) => (
                <motion.li
                  key={i}
                  className="about-activity"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.2 + i * 0.15}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon} {item.text}
                </motion.li>
              ))}
            </ul>

            {/* Quote */}
            <motion.p
              style={{ color: "rgb(155 126 172)" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
            >
              "Always learning, always building, and preparing for
              opportunities!"{" "}
            </motion.p>

            {/* Footer */}
            <motion.footer
              className="blockquote-footer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.65}
            >
              Ankit
            </motion.footer>

          </blockquote>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default AboutCard;