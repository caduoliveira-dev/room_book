import { z } from "zod";

const hoursEnum = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
] as const;

export const createBookingSchema = z.object({
  roomId: z.string(),
  userId: z.string(),
  date_booking: z.string(),
  hours: z.array(z.string()),
});

export const bookingResponseSchema = z.object({
  id: z.uuid(),
  roomId: z.uuid(),
  userId: z.uuid(),
  date_booking: z.string(),
  hours: z.array(z.string()),
  createdAt: z.date(),
});
