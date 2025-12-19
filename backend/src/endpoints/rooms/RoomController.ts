import { Elysia } from "elysia";
import { createRoomSchema, roomResponseSchema } from "./RoomSchema";
import { RoomRepository } from "./RoomRepository";
import { RoomService } from "./RoomService";
import { betterAuth } from "../../macros/auth";

const serviceRoom = new RoomService(new RoomRepository());

export const roomController = new Elysia()
  .use(betterAuth)
  .decorate("serviceRoom", serviceRoom)
  .post(
    "/rooms",
    async ({ body, user, serviceRoom }) => {
      return await serviceRoom.createRoom({
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
    async ({ serviceRoom }) => {
      return await serviceRoom.getAllRooms();
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
    async ({ params: { id }, serviceRoom }) => {
      return await serviceRoom.getRoomById(id);
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
