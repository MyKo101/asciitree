import { useState } from "react";
import Button from "react-bootstrap/Button";
import Spec from "../../classes/Spec";
import SettingsMenu from "./SettingsMenu";

interface outputMenuInterface {
  spec: Spec;
  setSpec: React.Dispatch<React.SetStateAction<Spec>>;
  copyString: string;
}

export default function OutputMenu({
  spec,
  setSpec,
  copyString,
}: outputMenuInterface) {
  const [showSettings, setShowSettings] = useState(false);

  const toggleShowSettings = () => {
    setShowSettings((x) => !x);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(copyString);
  };

  return (
    <div className="d-flex w-100">
      <div className="p-2">ASCII Format</div>
      <Button
        className=" ms-auto io-button io-menu-button"
        onClick={handleCopy}
      >
        Copy
      </Button>
      <Button
        className="io-button io-menu-button output-settings-button"
        onClick={toggleShowSettings}
      >
        Settings
      </Button>
      {showSettings && <SettingsMenu spec={spec} setSpec={setSpec} />}
    </div>
  );
}
