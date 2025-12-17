import { Elysia } from "elysia";
import { createBookingSchema, bookingResponseSchema } from "./BookingSchema";
import { BookingRepository } from "./BookingRepository";
import { BookingService } from "./BookingService";
import { betterAuth } from "../../macros/auth";

const service = new BookingService(new BookingRepository());

export const bookingController = new Elysia()
  .use(betterAuth)
  .decorate("service", service)
  .post(
    "/bookings",
    async ({ body, user, service }) => {
      return await service.createBooking({
        ...body,
        userId: user.id,
      });
    },
    {
      auth: true,
      body: createBookingSchema.omit({ userId: true }),
      response: {
        201: bookingResponseSchema,
      },
      detail: {
        summary: "Create a new booking",
        tags: ["Bookings"],
      },
    }
  )
  .get(
    "/bookings",
    async ({ service }) => {
      return await service.getAllBookings();
    },
    {
      auth: true,
      response: {
        200: bookingResponseSchema.array(),
      },
      detail: {
        summary: "Get all bookings",
        tags: ["Bookings"],
      },
    }
  )
  .get(
    "/bookings/:id",
    async ({ params: { id }, service }) => {
      return await service.getBookingById(id);
    },
    {
      auth: true,
      response: {
        200: bookingResponseSchema,
      },
      detail: {
        summary: "Get a booking by ID",
        tags: ["Bookings"],
      },
    }
  );
