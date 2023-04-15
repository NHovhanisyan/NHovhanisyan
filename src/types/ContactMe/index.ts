export enum InputType {
  INPUT = "input",
  TEXTAREA = "textarea"
}

export type EmailFormTypes = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string
}

export type EmailFormInputTypes = {
  title: string;
  type: InputType
}