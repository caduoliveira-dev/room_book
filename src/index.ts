import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { z } from "zod";
import { roomController } from "./endpoints/rooms/RoomController";
import { bookingController } from "./endpoints/bookings/BookingController";
import { auth, OpenAPI } from "./lib/auth";

const app = new Elysia()
  .mount(auth.handler)
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    })
  )
  .use(roomController)
  .use(bookingController)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
