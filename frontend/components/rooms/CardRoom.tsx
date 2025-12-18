import { Card } from "../ui/card";
import { Room } from "@/types/booking";
import { Users, MapPin, Check } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  room: Room;
  isSelected?: boolean;
  animationDelay?: number;
}

export default function RoomCard({
  room,
  isSelected,
  animationDelay = 0,
}: RoomCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md bg-card border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up",
        isSelected && "ring-2 ring-accent shadow-glow"
      )}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold text-primary-foreground mb-1">
            {room.name}
          </h3>
          <div className="flex items-center gap-3 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {room.capacity} pessoas
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {room.location}
            </span>
          </div>
        </div>
        {isSelected && (
          <div className="absolute top-3 right-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-lg">
              <Check className="h-4 w-4 text-accent-foreground" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {room.amenities.slice(0, 3).map((amenity) => (
            <Badge
              key={amenity}
              variant="secondary"
              className="text-xs font-normal"
            >
              {amenity}
            </Badge>
          ))}
          {room.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs font-normal">
              +{room.amenities.length - 3}
            </Badge>
          )}
        </div>

        <Button className="w-full">
          {isSelected ? "Selecionada" : "Reservar Sala"}
        </Button>
      </div>
    </div>
  );
}
