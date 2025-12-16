import type { RoomRepository } from "./RoomRepository";

export class RoomService {
  constructor(private repo: RoomRepository) {}

  async createRoom(data: {
    name: string;
    capacity: number;
    description: string;
    amenities: string[];
    imageUrl: string;
    location: string;
    createdBy: string;
  }) {
    // (Futuro: validações, regras, eventos, etc.)
    return this.repo.create(data);
  }

  async getAllRooms() {
    return this.repo.getAll();
  }

  async getRoomById(id: string) {
    return this.repo.getById(id);
  }
}
