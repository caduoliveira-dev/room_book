import { Elysia } from "elysia";
import { createBookingSchema, bookingResponseSchema } from "./BookingSchema";
import { BookingRepository } from "./BookingRepository";
import { BookingService } from "./BookingService";
import { betterAuth } from "../../macros/auth";

export const bookingController = new Elysia().use(betterAuth).post(
  "/bookings",
  async ({ body, user }) => {
    const service = new BookingService(new BookingRepository());
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
);
