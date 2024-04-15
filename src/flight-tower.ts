// // flight-tower file is the mnaager of all flights and he send them whenever needed
import { fetchData } from './api.js';
import { Flight } from './flight.js';
import { FlightDTO, FlightData } from './flight-dto.js';

export class FlightsTower {
    #flights: Flight[] = [];
    #uniqueDestinations: Set<string> = new Set();

    async createNewFlights(): Promise<{ numFlights: number; uniqueDestinations: string[] } | undefined> {
        try {
            const data: FlightData = await fetchData();

            if (Array.isArray(data?.flights)) {
                const flights: FlightDTO[] = data.flights;

                this.#flights = flights
                    .map((flightData: FlightDTO) => {
                        if (!this.#uniqueDestinations.has(flightData.destination)) {
                            const flight = new Flight(flightData);
                            this.#uniqueDestinations.add(flightData.destination);
                            return flight; // ret only the flight if destination is unique
                        }
                        return null; //ret null if the destination is not unique
                    })
                    .filter(flight => flight !== null) as Flight[]; // filter out null values

                return {
                    numFlights: this.#flights.length, // ret the count of flights
                    uniqueDestinations: Array.from(this.#uniqueDestinations)
                };
            }
        } catch (error) {
            console.error('Error creating flights:', error);
        }

        // ret undefined if error or no flights were created:
        return undefined;
    }

    async departAllFlights() {
        await Promise.all(this.#flights.map((flight) => flight.depart()));
    }
    

    get flightsCount(): number {
        return this.#flights.length;
    }

    get flightsDestinations(): string[] {
        return Array.from(this.#uniqueDestinations);
    }
}


