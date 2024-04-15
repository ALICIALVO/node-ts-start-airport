export interface FlightDTO {
    number: number;
    origin: string;
    destination: string;
}

export interface FlightData {
    flights: FlightDTO[];
}