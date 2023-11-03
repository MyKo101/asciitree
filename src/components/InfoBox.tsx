import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function InfoBox() {
  return (
    <Container>
      <Row>
        <Col>
          <p id="InfoBox" className="text-left">
            A simple way to visualise your folder structure for your project.
            <br />
            Simply add files or folders to the structure on the left, and it
            will be displayed in an ascii format on the right.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
