import Link from "next/link";
import { AvatarDemo } from "./Avatar";

export default function Header() {
  return (
    <header className="sticky bg-white top-0 z-50 glass-strong border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div>
          <h1 className="text-2xl font-bold">
            Room<span className="text-primary">Book</span>
          </h1>
          <p className="text-sm text-muted-foreground sm:block hidden">
            Sistema de gerenciamento de salas
          </p>
        </div>
        <div className="space-x-4 sm:block hidden text-muted-foreground">
          <Link href="/home" className="hover:text-primary hover:underline">
            Salas
          </Link>
          <Link href="/bookings" className="hover:text-primary hover:underline">
            Minhas Reservas
          </Link>
        </div>
        <div>
          <AvatarDemo />
        </div>
      </div>
    </header>
  );
}
