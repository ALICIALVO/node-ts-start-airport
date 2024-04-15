// // flight-tower is the manager of all flights and he send them whenever needed

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

                flights.forEach((flightData: FlightDTO) => {
                    if (!this.#uniqueDestinations.has(flightData.destination)) {
                        const flight = new Flight(flightData);
                        this.#flights.push(flight);
                        this.#uniqueDestinations.add(flightData.destination);
                    }
                });

                return {
                    numFlights: this.#flights.length,
                    uniqueDestinations: Array.from(this.#uniqueDestinations)
                };
            }
        } catch (error) {
            console.error('Error creating flights:', error);
        }

        // ret undefined if was an error or no flights were created
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

