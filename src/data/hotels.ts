import type { CityId } from "../types";

/**
 * Real hotel bookings for this trip, sent directly by the traveler - not
 * researched/verified content like places, so no `sources` field. Links are
 * the traveler's own Booking.com share links.
 */
export interface Hotel {
  id: string;
  cityId: CityId;
  name: string;
  checkIn: string;
  checkOut: string;
  bookingUrl: string;
  address?: string;
  /**
   * In Japan, navigation (car nav systems and often Google Maps too) is
   * commonly done by the destination's phone number rather than its address,
   * since Japanese addresses are hierarchical and less GPS-precise - see
   * `buildHotelMapsUrl` in Hotels.tsx.
   */
  phone?: string;
}

/** In itinerary order: Osaka -> Kyoto -> Fuji -> Hakone -> Tokyo. */
export const hotels: Hotel[] = [
  {
    id: "osaka-hotel",
    cityId: "osaka",
    name: "Hotel Alps",
    checkIn: "28.9",
    checkOut: "1.10",
    bookingUrl: "https://www.booking.com/Share-0d8ueX9",
  },
  {
    id: "kyoto-hotel",
    cityId: "kyoto",
    name: "Hotel Nikko Princess Kyoto",
    checkIn: "1.10",
    checkOut: "4.10",
    bookingUrl: "https://www.booking.com/Share-hISZlh",
  },
  {
    id: "fuji-hotel",
    cityId: "fuji",
    name: "Fuji Speedway Hotel, in The Unbound Collection by Hyatt",
    checkIn: "4.10",
    checkOut: "5.10",
    bookingUrl: "https://www.booking.com/Share-I40JY3",
  },
  {
    id: "hakone-hotel",
    cityId: "hakone",
    name: "Hakone Ashinoko Hanaori",
    checkIn: "5.10",
    checkOut: "7.10",
    bookingUrl: "https://www.booking.com/Share-f9rXs3",
  },
  {
    id: "tokyo-hotel",
    cityId: "tokyo",
    name: "JR-East Hotel Mets Shibuya",
    checkIn: "7.10",
    checkOut: "14.10",
    bookingUrl: "https://www.booking.com/Share-A28e7w",
  },
];
