import { db } from "../../db";
import { rooms } from "../../db/schema";
import { eq } from "drizzle-orm";

export class RoomRepository {
  async create(data: {
    name: string;
    capacity: number;
    description: string;
    amenities: string[];
    imageUrl: string;
    location: string;
  }) {
    const [created] = await db.insert(rooms).values(data).returning();
    return created;
  }

  async getAll() {
    return await db.select().from(rooms);
  }

  async getById(id: string) {
    const [room] = await db.select().from(rooms).where(eq(rooms.id, id));
    return room;
  }
}
