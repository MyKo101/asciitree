import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TopBar from "./components/TopBar";
import InfoBox from "./components/InfoBox";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container>
        <Row>
          <InfoBox />
        </Row>
        <Row>
          <Main />
        </Row>
      </Container>
    </div>
  );
}

export default App;
