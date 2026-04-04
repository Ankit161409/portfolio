import React from "react";
import { Col, Row } from "react-bootstrap";
 
 
import Javascript from "../../Assets/TechIcons/Javascript.svg";
 import ReactIcon from "../../Assets/TechIcons/React.svg";
 import Java from "../../Assets/TechIcons/Java.svg";
 import Git from "../../Assets/TechIcons/Git.svg";
 

import SQL from "../../Assets/TechIcons/SQL.svg";
 
 
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Tomcat from "../../Assets/TechIcons/Tomcat.svg";
import bootstrap from "../../Assets/TechIcons/bootstrap.svg";
 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Javascript</div>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="go" />
        <div className="tech-icons-text">Go</div>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={HaskellIcon} alt="haskell" />
        <div className="tech-icons-text">Haskell</div>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons seze">
        <img src={bootstrap} alt="bootstrap" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

{/* <Col xs={4} md={2} className="tech-icons seze">
        <img src={Tailwind} alt="bootstrap" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="mui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons seze">
      <img src={Tomcat} alt="Postman" />
        <div className="tech-icons-text">Tomcat</div>
      </Col>
{/* 
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="Kafka" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col> */}
    </Row>
  );
}

export default Techstack;
