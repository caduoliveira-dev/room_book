export interface Room {
  id: string;
  name: string;
  capacity: number;
  description: string;
  amenities: string[];
  imageUrl: string;
  location: string;
}
export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  date_booking: string;
  hours: string[];
  createdAt: string;
}
