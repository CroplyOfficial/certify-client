export interface IField {
  label: String;
  type: "text" | "email" | "number" | "tel" | "date";
}

export interface ICredentialTemplate {
  _id: string;
  name: String;
  referenceCode: String;
  credentialType: "License" | "Certificate" | "Ticket";
  duration: number;
  fields: IField[];
}
