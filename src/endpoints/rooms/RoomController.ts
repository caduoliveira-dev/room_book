import { Elysia } from "elysia";
import { createRoomSchema, roomResponseSchema } from "./RoomSchema";
import { RoomRepository } from "./RoomRepository";
import { RoomService } from "./RoomService";
import { betterAuth } from "../../macros/auth";

const service = new RoomService(new RoomRepository());

export const roomController = new Elysia()
  .use(betterAuth)
  .decorate("service", service)
  .post(
    "/rooms",
    async ({ body, user, service }) => {
      return await service.createRoom({
        ...body,
        createdBy: user.id,
      });
    },
    {
      auth: true,
      body: createRoomSchema.omit({ createdBy: true }),
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
    async ({ service }) => {
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
    async ({ params: { id }, service }) => {
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
