import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Input from "./Input";
import Output from "./Output";

import { useMemo } from "react";
import FileTreeContext, { FileTreeState } from "./FileTreeContext";

export default function Main() {
  const [fileTree, setFileTree] = FileTreeState();
  const value = useMemo(() => ({ fileTree, setFileTree }), [fileTree]);

  return (
    <FileTreeContext.Provider value={value}>
      <Container>
        <Row>
          <Col lg={6} style={{ height: 300 }} className="py-2">
            <Input />
          </Col>
          <Col style={{ height: 300 }} className="py-2">
            <Output />
          </Col>
        </Row>
      </Container>
    </FileTreeContext.Provider>
  );
}
