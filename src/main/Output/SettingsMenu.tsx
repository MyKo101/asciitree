import Spec, { SpecField } from "../../classes/Spec";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { saveSpec } from "../cookies";
import Button from "react-bootstrap/Button";

interface settingsMenuInterface {
  spec: Spec;
  setSpec: React.Dispatch<React.SetStateAction<Spec>>;
}

interface settingsRowInterface<T extends string | number | boolean> {
  name: SpecField;
  value: T;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingsRowNumber = ({
  name,
  value,
  handler,
}: settingsRowInterface<number>) => {
  return (
    <Row>
      <Col className="output-settings-label">{name}</Col>
      <Col className="output-settings-input">
        <Form.Control
          className="output-settings-input-form"
          value={value}
          onChange={handler}
          as="input"
          type="number"
        />
      </Col>
    </Row>
  );
};
const SettingsRowString = ({
  name,
  value,
  handler,
}: settingsRowInterface<string>) => {
  return (
    <Row>
      <Col className="output-settings-label">{name}</Col>
      <Col className="output-settings-input">
        <Form.Control
          className="output-settings-input-form"
          value={value}
          onChange={handler}
          as="input"
        />
      </Col>
    </Row>
  );
};
const SettingsRowBoolean = ({
  name,
  value,
  handler,
}: settingsRowInterface<boolean>) => {
  return (
    <Row>
      <Col className="output-settings-label">{name}</Col>
      <Col className="output-settings-input">
        <Form.Check
          className="output-settings-input-form"
          checked={value}
          type="checkbox"
          onChange={handler}
          as="input"
        />
      </Col>
    </Row>
  );
};

const SettingsRow = <T extends string | number | boolean>({
  name,
  value,
  handler,
}: settingsRowInterface<T>) => {
  if (name === "Indent") {
    return (
      <SettingsRowNumber
        name={name}
        value={value as number}
        handler={handler}
      />
    );
  }
  if (name === "Include Root") {
    return (
      <SettingsRowBoolean
        name={name}
        value={value as boolean}
        handler={handler}
      />
    );
  }
  return (
    <SettingsRowString name={name} value={value as string} handler={handler} />
  );
};

export default function SettingsMenu({ spec, setSpec }: settingsMenuInterface) {
  const changeGenerator = (name: SpecField) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setSpec((prev) => {
        const new_spec = prev.copy();
        if (name === "Indent") {
          new_spec[name] = parseInt(e.target.value);
        } else if (name === "Include Root") {
          new_spec[name] = e.target.checked;
        } else {
          new_spec[name] = e.target.value;
        }
        saveSpec(new_spec);
        return new_spec;
      });
    };
  };

  const setDefault = () => {
    setSpec(new Spec());
  };

  return (
    <Container className="output-settings-box">
      <Button className="io-button output-settings-button" onClick={setDefault}>
        {" "}
        Default
      </Button>
      {Object.keys(spec).map((name, i) => {
        let name2: SpecField = name as SpecField;
        let value = spec[name2];
        return (
          <SettingsRow
            key={i}
            name={name2}
            value={value}
            handler={changeGenerator(name2)}
          />
        );
      })}
    </Container>
  );
}
