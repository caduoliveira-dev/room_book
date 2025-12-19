"use client";

import { useState } from "react";
import RoomCard from "@/components/rooms/CardRoom";
import { mockRooms } from "../data/mockData";
import { Room } from "@/types/booking";
import { Footer } from "@/components/Footer";

let selectedRoom: Room | null = null;

export default function Home() {
  const [rooms] = useState<Room[]>(mockRooms);
  return (
    <div>
      <main className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">
            Salas Disponíveis
          </h3>
          <span className="text-sm text-muted-foreground">{10} salas</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              isSelected={selectedRoom?.id === room.id}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
