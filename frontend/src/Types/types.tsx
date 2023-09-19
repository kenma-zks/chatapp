export interface IChatMessage {
  type?: string;
  time: string;
  text: string;
}

export interface IChatHeadData {
  id: number;
  Name: string;
  Date: Date;
  Time: string;
  Image: string | null;
  lastOnline?: string;
  messages: IChatMessage[];
}
