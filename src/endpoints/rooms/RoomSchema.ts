import { z } from "zod";

export const createRoomSchema = z.object({
  name: z.string().min(1),
  capacity: z.number().min(1),
  description: z.string(),
  amenities: z.array(z.string()),
  imageUrl: z.url(),
  location: z.string(),
});

export const roomResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  capacity: z.number().min(1),
  description: z.string(),
  amenities: z.array(z.string()),
  imageUrl: z.url(),
  location: z.string(),
  createdAt: z.date(),
});
