import { Room, Booking } from "@/types/booking";

export const mockRooms: Room[] = [
  {
    id: "1",
    name: "Sala Executiva",
    capacity: 12,
    description:
      "Sala de reuniões premium com vista panorâmica, ideal para apresentações executivas e reuniões de diretoria.",
    amenities: [
      "Projetor 4K",
      "Videoconferência",
      "Quadro Branco",
      "Ar Condicionado",
      "Café",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    location: "15º Andar - Ala Norte",
  },
  {
    id: "2",
    name: "Sala de Treinamento",
    capacity: 20,
    description:
      "Espaço amplo equipado para treinamentos, workshops e apresentações para grupos maiores.",
    amenities: [
      "2 Projetores",
      "Sistema de Som",
      "Mesas Modulares",
      "Ar Condicionado",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    location: "10º Andar - Ala Sul",
  },
  {
    id: "3",
    name: "Sala Criativa",
    capacity: 8,
    description:
      "Ambiente descontraído para brainstorms e sessões criativas, com móveis flexíveis.",
    amenities: ['TV 65"', "Quadro de Ideias", "Puffs", "Café e Snacks"],
    imageUrl:
      "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=600&h=400&fit=crop",
    location: "5º Andar - Área Criativa",
  },
  {
    id: "4",
    name: "Sala de Videoconferência",
    capacity: 6,
    description:
      "Sala especializada para calls e reuniões remotas com equipamento profissional.",
    amenities: [
      "Sistema Polycom",
      "Câmera 4K",
      'Tela 75"',
      "Isolamento Acústico",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=600&h=400&fit=crop",
    location: "12º Andar - Tech Hub",
  },
  {
    id: "5",
    name: "Auditório Principal",
    capacity: 50,
    description:
      "Auditório completo para eventos, apresentações corporativas e town halls.",
    amenities: [
      "Palco",
      "Sistema de Som Pro",
      "Projetor Cinema",
      "Microfones",
      "Streaming",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    location: "Térreo - Centro de Eventos",
  },
  {
    id: "6",
    name: "Sala Rápida",
    capacity: 4,
    description: "Sala compacta para reuniões rápidas e one-on-ones.",
    amenities: ['TV 42"', "Videoconferência", "Ar Condicionado"],
    imageUrl:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&h=400&fit=crop",
    location: "8º Andar - Hub Reuniões",
  },
];

export const mockBookings: Booking[] = [
  {
    id: "b1",
    roomId: "1",
    userId: "user1",
    userName: "Carlos Silva",
    title: "Reunião de Planejamento Q1",
    date: "2025-01-15",
    startTime: "09:00",
    endTime: "10:30",
    createdAt: "2025-01-10T10:00:00Z",
    status: "confirmed",
  },
  {
    id: "b2",
    roomId: "1",
    userId: "user2",
    userName: "Ana Costa",
    title: "Apresentação para Cliente",
    date: "2025-01-15",
    startTime: "14:00",
    endTime: "16:00",
    createdAt: "2025-01-10T11:00:00Z",
    status: "confirmed",
  },
  {
    id: "b3",
    roomId: "2",
    userId: "user1",
    userName: "Carlos Silva",
    title: "Workshop de Produto",
    date: "2025-01-16",
    startTime: "10:00",
    endTime: "12:00",
    createdAt: "2025-01-10T12:00:00Z",
    status: "confirmed",
  },
];

export const timeSlots = [
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
];
