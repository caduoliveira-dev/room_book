"use client";

import { ColumnDef } from "@tanstack/react-table";

import type { Booking } from "@/types/booking";

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date_booking",
    header: "Data da Reserva",
  },
  {
    accessorKey: "hours",
    header: "Horas Reservadas",
  },
  {
    accessorKey: "createdAt",
    header: "Criado Em",
  },
];
