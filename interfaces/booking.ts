export interface Booking {
  id: number;
  roomId: number;
  guestId: number;
  checkInDate: Date;
  checkOutDate: Date;
  price: number;
}
