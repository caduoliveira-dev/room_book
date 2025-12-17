import { db } from "../../db";
import { bookings } from "../../db/schema";
import { eq } from "drizzle-orm";

export class BookingRepository {
  async create(data: {
    roomId: string;
    userId: string;
    date_booking: string;
    hours: string[];
  }) {
    const [created] = await db.insert(bookings).values(data).returning();
    return created;
  }

  async getAll() {
    return await db.select().from(bookings);
  }

  async getById(id: string) {
    const [booking] = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, id));
    return booking;
  }
}
