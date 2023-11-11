import { useState, useContext, useEffect } from "react";

import FileTreeContext from "../FileTreeContext";

import OutputMenu from "./OutputMenu";
import Spec from "../../classes/Spec";
import { loadSpec } from "../cookies";

import makeOutputText from "./OutputText";

import Form from "react-bootstrap/Form";

export default function Output() {
  const { fileTree } = useContext(FileTreeContext);
  const [outputSpec, setOutputSpec] = useState(new Spec());
  const [outputString, setOutputString] = useState(
    makeOutputText(fileTree, outputSpec)
  );

  useEffect(() => setOutputSpec(loadSpec()), []);

  useEffect(
    () => setOutputString(makeOutputText(fileTree, outputSpec)),
    [fileTree, outputSpec]
  );

  return (
    <div className="io-container output-container">
      {/* <Settings spec={outputSpec} setSpec={setOutputSpec} /> */}
      <OutputMenu
        spec={outputSpec}
        setSpec={setOutputSpec}
        copyString={outputString.join("\n")}
      />
      <Form.Control
        className="output-text"
        as="textarea"
        rows={outputString.length}
        value={outputString.join("\n")}
      />
    </div>
  );
}
