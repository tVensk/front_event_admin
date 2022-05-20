import {User} from "./user";

export interface Event {
  archive: boolean;
  confirmation: boolean;
  creator: User;
  date: Date;
  description: string;
  id: number;
  image: string;
  latitude: number;
  longitude: number;
  name: string;
  price: number;
  status: string;
  users: User[];
  address: string;
}
