import {Event} from "./event";

export interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  work: string,
  birthday: Date,
  photo: string,
  role: string,
  pw_hash: string,
  creatorEvents: Event[],
  events: Event[]
}
