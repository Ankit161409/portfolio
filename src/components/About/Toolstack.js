import React from "react";
import { Col, Row } from "react-bootstrap";
 
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import spring from "../../Assets/TechIcons/spring.svg";
import Eclipse from "../../Assets/TechIcons/Eclipse.svg";
import triangle from "../../Assets/TechIcons/triangle.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={spring} alt="go" className="tech-icon-images " />
        <div className="tech-icons-text">STS</div>
      </Col>
         <Col xs={4} md={2} className="tech-icons ">
        <img src={Eclipse} alt="go" className="tech-icon-images " />
        <div className="tech-icons-text">Eclipse</div>
      </Col> 
       <Col xs={4} md={2} className="tech-icons ">
        <img src={triangle} alt="go" className="tech-icon-images " />
        <div className="tech-icons-text">Versel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
