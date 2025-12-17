import type { BookingRepository } from "./BookingRepository";

export class BookingService {
  constructor(private repo: BookingRepository) {}

  async createBooking(data: {
    roomId: string;
    userId: string;
    date_booking: string;
    hours: string[];
  }) {
    return this.repo.create(data);
  }

  async getAllBookings() {
    return this.repo.getAll();
  }

  async getBookingById(id: string) {
    return this.repo.getById(id);
  }
}
