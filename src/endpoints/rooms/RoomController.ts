import { Elysia } from "elysia";
import { createRoomSchema, roomResponseSchema } from "./RoomSchema";
import { RoomRepository } from "./RoomRepository";
import { RoomService } from "./RoomService";
import { betterAuth } from "../../macros/auth";

export const roomController = new Elysia()
  .use(betterAuth)
  .post(
    "/rooms",
    async ({ body }) => {
      const service = new RoomService(new RoomRepository());
      return await service.createRoom(body);
    },
    {
      auth: true,
      body: createRoomSchema,
      response: {
        201: roomResponseSchema,
      },
      detail: {
        summary: "Create a new room",
        tags: ["Rooms"],
      },
    }
  )
  .get(
    "/rooms",
    async () => {
      const service = new RoomService(new RoomRepository());
      return await service.getAllRooms();
    },
    {
      auth: true,
      response: {
        200: roomResponseSchema.array(),
      },
      detail: {
        summary: "Get all rooms",
        tags: ["Rooms"],
      },
    }
  )
  .get(
    "/rooms/:id",
    async ({ params: { id } }) => {
      const service = new RoomService(new RoomRepository());
      return await service.getRoomById(id);
    },
    {
      auth: true,
      response: {
        200: roomResponseSchema,
      },
      detail: {
        summary: "Get a room by ID",
        tags: ["Rooms"],
      },
    }
  );
