import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "../../../../CSS/HackathonCard.module.css";

function HackathonCard(props) {
  const { item } = props;

  return (
    <div id = "hackathon" className = {styles.Box}>
      <Card className = {styles.Card}>
        <Row>
          <Card.Img
            variant = "top"
            src = {item.image}
            alt = {item.title}
            className = {styles.CardImage}
          />
          <h1 className = {styles.Title} style = {{ color: "#008cd8" }}>
            {item.title}
          </h1>
        </Row>
        <Row>
          <p className = {styles.Description}>
            {item.description}
          </p>
        </Row>
        <Container>
          <Row>
            <Col md = {4} lg = {4}>
              <Row>
                <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                  Date :
                </h5>
                <h5 className = {styles.Value}>
                  {item.date}
                </h5>
              </Row>
            </Col>

            <Col md = {4} lg = {4}>
              <Row>
                <h5 className = {styles.Heading} style = {{ marginLeft: "20px" }}>
                  Location :
                </h5>
                <h5 className = {styles.Value}>
                  {item.location}
                </h5>
              </Row>
            </Col>

            <Col md = {4} lg = {4}>
              <Row>
                <h5 className = {styles.Heading}>
                  Deadline :
                </h5>
                <h5 className = {styles.Value}>
                  {item.deadline}
                </h5>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md = {12} lg = {12}>
              <Row>
                <Container>
                  <h5 className = {styles.Heading} style = {{ marginLeft: "5px" }}>
                    Eligibility : 
                    <span className = {styles.Value}>
                      {item.eligibility} 
                    </span>
                  </h5>
                </Container>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md = {0} lg = {12}>
              <a href = {item.url}>
                <button className = {styles.Button}>
                  Apply
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default HackathonCard;
