import fetch from 'node-fetch';
import {FlightData} from './flight-dto.js';


export async function fetchData() : Promise<FlightData>{
    try {
        const response = await fetch('https://api.npoint.io/a4429717c3b5df271ab1');
        const data = await response.json();
        return data as FlightData;
    } catch (error) {
        console.error('ERROR FETCHING DATA', error);
        throw error;
    }
}




// fetchData();