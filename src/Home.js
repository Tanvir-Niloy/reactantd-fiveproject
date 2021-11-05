import React from "react";
import Dashboard from "./Dashboard";
import { Row, Col } from "antd";

export default function Home() {
  return (
    <Dashboard>
      <Row justify="center" className="home">
        <Col lg={10} sm={24}>
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1213.jpg?size=338&ext=jpg"
            alt=""
            height="400px"
          />
        </Col>
        <Col lg={24} sm={24}>
          <h3
            style={{ color: "tomato", fontSize: "30px", textAlign: "center" }}
          >
            <b>Hello, iam Tanvir Niloy</b>
          </h3>
          <p
            style={{
              justifyContent: "center",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            dolore aperiam delectus sit reprehenderit provident recusandae id
            ullam nesciunt obcaecati ad nostrum explicabo, aspernatur nulla
            ipsam deleniti suscipit excepturi sapiente asperiores cupiditate
            nisi! Distinctio, ipsa inventore! Est asperiores nihil ea?
          </p>
        </Col>
      </Row>
    </Dashboard>
  );
}
