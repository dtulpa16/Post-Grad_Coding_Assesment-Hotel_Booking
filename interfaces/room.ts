export interface Room {
  room_id: number;
  type: string;
  view: string;
  price_per_night: number;
  facilities: string[];
  is_booked: boolean;
}
