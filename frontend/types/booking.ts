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
  userName: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  status: "confirmed" | "cancelled";
}
