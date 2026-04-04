import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 
import Course from "../../Assets/Projects/Course.png";
 
import Emp from "../../Assets/Projects/Emp.png";
import trendy from "../../Assets/Projects/Trendy.png";
import chat from "../../Assets/Projects/chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trendy}
              isBlog={false}
              title="Trendyx Shopping site"
              description=" Trendyx Shopping Site is a modern e-commerce web application developed using React.js. The platform allows users to browse a wide range of products with a smooth and interactive user experience. It integrates a FakeStore API to dynamically fetch and display product data in real time.
The application includes features such as category-based product filtering and sorting, making it easy for users to find items according to their preferences. With a responsive design and efficient state management, the project demonstrates strong frontend development skills and API handling."
              ghLink="https://github.com/Ankit161409/Ecommerce-website"
              demoLink="https://trendyx-ecommerce-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="AI Assistant"
              description="Gemini Chatbot Application is a full-stack AI-powered web application that enables users to interact with a chatbot in real time. The frontend is developed using React (Vite), providing a fast and responsive user interface for seamless user interaction.

The application follows a client-server architecture where user prompts are sent from the frontend to a Spring Boot backend. The backend processes these requests by securely integrating with the Gemini API, fetching AI-generated responses, and sending them back to the frontend. The responses are then dynamically rendered on the UI, creating an interactive chat experience."
    // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Course}
              isBlog={false}
              title="Course Management Application "
              description="Course Management Application is a full-stack web application developed using Spring Boot and React, designed to manage course-related data efficiently. The application provides a user-friendly interface for performing CRUD operations (Create, Read, Update, Delete) on courses.

The backend is built with Spring Boot and leverages Spring Data JPA for seamless database interaction, supporting both MySQL and PostgreSQL databases. The frontend, developed using React, ensures a responsive and interactive user experience.

The primary objective of this project is to demonstrate effective use of Spring Boot and Spring Data JPA for building scalable backend services and integrating them with a modern frontend framework."  
//  ghLink="https://github.com/soumyajit4419/Editor.io" 
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emp}
              isBlog={false}
              title="Employee Management System"
              description="Employee Management System is a web-based application developed using JDBC, Servlets, and JSP, following the MVC (Model-View-Controller) architecture. The application is designed to efficiently manage employee records with a structured and scalable approach.
It allows users to perform CRUD operations (Create, Read, Update, Delete) on employee data, ensuring smooth data management and interaction with the database. JDBC is used for database connectivity, while Servlets handle the business logic and JSP is used for presenting dynamic content to the user.
This project demonstrates a strong understanding of Java-based web development, MVC design pattern, and database integration."
    ghLink="https://github.com/Ankit161409/Employee-Management-System"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
