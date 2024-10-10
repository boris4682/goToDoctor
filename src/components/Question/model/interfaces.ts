export enum FieldTypes {
  Text = "text",
  Textarea = "textarea",
  Radio = "radio",
  Checkbox = "checkbox",
}
export interface Field {
  id: number;
  text: string;
  field_type: FieldTypes;
}
export interface Props {
  question: {
    id: number;
    text: string;
    fields: Field[];
  };
  disabled?: boolean;
}
