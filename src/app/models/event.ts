import {User} from "./user";

export interface Event {
  archive: boolean;
  confirmation: boolean;
  creator: User;
  description: string;
  id: number;
  image: string;
  latitude: number;
  longitude: number;
  name: string;
  price: number;
  startDate: Date,
  endDate:Date,
  status: string;
  users: User[];
  address: string;
}
