import { FlightsTower } from './flight-tower.js';
import log from '@ajar/marker';

const flightsTower = new FlightsTower();

(async () => {
    const flightCreationInfo = await flightsTower.createNewFlights();

    if (flightCreationInfo) {
        const { numFlights, uniqueDestinations } = flightCreationInfo;
        log.blue(`==============================`);
        console.log(`${numFlights} flights were created`);
        console.log(`destinations: ${uniqueDestinations.join(', ')}`);
        log.blue(`==============================`);

        flightsTower.departAllFlights();
    }
})();


// import {FlightsTower} from "./flight-tower.js";

// const tower = new FlightsTower();
// await tower.createNewFlights();

// tower.departAllFlights();

// import { Flight } from './flight.js';

