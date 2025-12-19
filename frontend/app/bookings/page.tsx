import { Footer } from "@/components/Footer";
import { DataTable } from "../bookings/data-table";
import { columns } from "./columns";
import type { Booking } from "@/types/booking";

export default async function Bookings() {
  async function getData(): Promise<Booking[]> {
    // Fetch data from your API here.
    const res = await fetch("http://localhost:3000/bookings", {
      cache: "no-store",
    });
    return res.json();
  }
  const data = await getData();
  if (!data) {
    return null;
  }
  return (
    <div>
      <main className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">
            Minhas Reservas
          </h3>
        </div>
        <DataTable columns={columns} data={data} />
      </main>
      <Footer />
    </div>
  );
}
