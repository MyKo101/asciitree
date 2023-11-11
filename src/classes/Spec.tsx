const DEFAULT_SPEC = {
  "Vertical Bar Empty": "│",
  "Vertical Bar": "├",
  "Vertical Bar Last": "└",
  "File Indicator": "─",
  "Folder Indicator": ">",
  "Include Root": true,
  Indent: 1,
};

export type TSpec = typeof DEFAULT_SPEC;
export type SpecField = keyof TSpec;
export const NumericFields = ["Indent"] as const;

export default class Spec {
  "Vertical Bar": string;
  "Vertical Bar Empty": string;
  "Vertical Bar Last": string;
  "File Indicator": string;
  "Folder Indicator": string;
  "Indent": number;
  "Include Root": boolean;

  constructor(d: TSpec = DEFAULT_SPEC) {
    if (d === undefined) {
      d = DEFAULT_SPEC;
    }
    this["Vertical Bar"] = d["Vertical Bar"];
    this["Vertical Bar Empty"] = d["Vertical Bar Empty"];
    this["Indent"] = d["Indent"];
    this["File Indicator"] = d["File Indicator"];
    this["Folder Indicator"] = d["Folder Indicator"];
    this["Include Root"] = d["Include Root"];
    this["Vertical Bar Last"] = d["Vertical Bar Last"];
  }

  copy() {
    return Spec.fromJSON(this.toJSON());
  }
  toJSON() {
    return {
      "Vertical Bar": this["Vertical Bar"],
      "Vertical Bar Empty": this["Vertical Bar Empty"],
      "Vertical Bar Last": this["Vertical Bar Last"],
      Indent: this["Indent"],
      "File Indicator": this["File Indicator"],
      "Folder Indicator": this["Folder Indicator"],
      "Include Root": this["Include Root"],
    };
  }
  static fromJSON(data: TSpec) {
    return new Spec(data);
  }
}
