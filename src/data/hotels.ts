import type { CityId } from "../types";

/**
 * Real hotel bookings for this trip. Names/dates/booking links were sent
 * directly by the traveler; address/phone were looked up afterward (Google's
 * business panel, cross-checked against each hotel's own official site) since
 * the traveler didn't have them on hand - not researched/verified content
 * like places, so no `sources` field, but still real, not invented.
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
    address: "2-25 Nambasennichimae, Chuo-ku, Osaka 542-0075, Japan",
    phone: "+81 6-4396-8888",
  },
  {
    id: "kyoto-hotel",
    cityId: "kyoto",
    name: "Hotel Nikko Princess Kyoto",
    checkIn: "1.10",
    checkOut: "4.10",
    bookingUrl: "https://www.booking.com/Share-hISZlh",
    address: "630 Takahashi-cho, Karasuma Takatsuji Higashi-iru, Shimogyo-ku, Kyoto 600-8096, Japan",
    phone: "+81 75-342-2111",
  },
  {
    id: "fuji-hotel",
    cityId: "fuji",
    name: "Fuji Speedway Hotel, in The Unbound Collection by Hyatt",
    checkIn: "4.10",
    checkOut: "5.10",
    bookingUrl: "https://www.booking.com/Share-I40JY3",
    address: "645 Omika, Oyama-cho, Sunto-gun, Shizuoka 410-1308, Japan",
    phone: "+81 550-20-1234",
  },
  {
    id: "hakone-hotel",
    cityId: "hakone",
    name: "Hakone Ashinoko Hanaori",
    checkIn: "5.10",
    checkOut: "7.10",
    bookingUrl: "https://www.booking.com/Share-f9rXs3",
    address: "160 Togendai, Motohakone, Hakone, Ashigarashimo District, Kanagawa 250-0522, Japan",
    phone: "+81 460-83-8739",
  },
  {
    id: "tokyo-hotel",
    cityId: "tokyo",
    name: "JR-East Hotel Mets Shibuya",
    checkIn: "7.10",
    checkOut: "14.10",
    bookingUrl: "https://www.booking.com/Share-A28e7w",
    address: "3-29-17 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan",
    phone: "+81 3-3409-0011",
  },
];
