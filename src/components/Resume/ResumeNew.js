import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Ankit_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ maxWidth: "250px", overflow: "hidden" }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </motion.div>
        </Row>

        {/* PDF Viewer */}
        <Row
          className="resume"
          style={{ overflowX: "hidden", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
            style={{
              display: "flex",
              justifyContent: "center",
              overflowX: "hidden",
              width: "100%",
            }}
          >
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </motion.div>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ maxWidth: "250px", overflow: "hidden" }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ width: "100%" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </motion.div>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;