import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Entries</p>
                      <Card.Title as="h4">15</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Updated
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Room Temp</p>
                      <Card.Title as="h4">26 Deg</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  1-June-2021
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">In Live</p>
                      <Card.Title as="h4">100+</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Untill Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Ideal H B</p>
                      <Card.Title as="h4">76</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Average of 1.93 Billion
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Live Stream</Card.Title>
                <p className="card-category">24 Hours Monitoring</p>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <iframe
                  width="1163"
                  height="520"
                  src="https://www.youtube.com/embed/-42QA9gafNg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
          <Col md="7">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Heart Beat</Card.Title>
                <p className="card-category">Based on Pulse</p>
              </Card.Header>
              <Card.Body>
                <div
                  style={{ height: "50vh" }}
                  className="d-flex justify-content-center align-items-center"
                  id=""
                >
                  <a
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bolder",
                      fontSize: "3vh",
                      color: "#000000",
                    }}
                    href="https://thingspeak.com/channels/1404706/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Pulse+rate&type=line"
                  >
                    Heart Beat Pulse Curve
                  </a>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updates Every 30 Seconds
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="5">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Temperature Record</Card.Title>
                <p className="card-category">Temparature on contact</p>
              </Card.Header>
              <Card.Body>
                <div
                  style={{ height: "50vh" }}
                  className="d-flex justify-content-center align-items-center"
                  id=""
                >
                  <a
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bolder",
                      fontSize: "3vh",
                      color: "#000000",
                    }}
                    href="https://thingspeak.com/channels/1404706/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
                  >
                    Temperature Curve
                  </a>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updates Every 27 Seconds
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
