import dayjs from 'dayjs';
import log from '@ajar/marker';
import { FlightDTO } from './flight-dto.js';

// export interface FlightDTO {
//     number: number;
//     origin: string;
//     destination: string;
// }

export class Flight {
    #number: number;
    #origin: string;
    #destination: string;
    #departed: boolean = false;
    #landed: boolean = false;

    constructor(dto: FlightDTO) {
        this.#number = dto.number;
        this.#origin = dto.origin;
        this.#destination = dto.destination;
    }

    get number(): number {
        return this.#number;
    }

    set number(value: number) {
        this.#number = value;
    }

    get origin(): string {
        return this.#origin;
    }

    set origin(value: string) {
        this.#origin = value;
    }

    get destination(): string {
        return this.#destination;
    }

    set destination(value: string) {
        this.#destination = value;
    }

    get departed(): boolean {
        return this.#departed;
    }

    get landed(): boolean {
        return this.#landed;
    }

    depart(): void {
        setTimeout(() => {
            this.#departed = true;
            this.#land();
        }, Math.floor(Math.random() * 8000) + 1000); // Random delay between 1 and 5 seconds
    }

    #land(): void {
        this.#landed = true;
        // const departedTime = dayjs().format('MMM-DD-YYYY HH:mm:ss');
        const landedTime = dayjs().format('MMM-DD-YYYY HH:mm:ss');
        log.magenta(`🛬 Arrived: ${this.#number} from ➡️ ${this.#origin} to ➡️ ${this.#destination} on ${landedTime}`);
        // console.log(log.magenta(`Arrived: `) +log.blue(`${this.#number} `) +
        //     log.yellow(`from: `) +
        //     log.green(`${this.#origin} `) +
        //     log.cyan(`to `) +
        //     log.red(`${this.#destination} `) +
        //     log.blue(`on ${landedTime}`)
        //   );
        
    }
}

// ${log.blue(this.#number)}




// ========================================
// // import * as dayjs from 'dayjs'
// // dayjs().format();
// import dayjs from 'dayjs';
// // import log from "@ajar/marker";

// // dayjs().format()


// // #departed // #landed needs time stamp liberary


// export class Flight{
// #number: string;
// #origin: string;
// #destination: string;
// #departed: boolean;
// #landed: boolean;

// constructor(number: string, origin: string, destination: string){
// this.#number = number;
// this.#origin = origin;
// this.#destination = destination;
// this.#departed =  false;
// this.#landed = false;


// }

// depart(){
//     // 
//     if (!this.#departed) {
//         const departedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
//         console.log(`Flight ${this.#number} departed at ${departedAt}.`);
//         this.#departed = true;
//     }
//   }
  
//   #land(){
//    // 
//    if (this.#departed && !this.#landed) {
//     const landedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
//     console.log(`Flight ${this.#number} landed at ${landedAt}.`);
//     this.#landed = true;
// }
//   }
// // 
// get number(): string {
//     return this.#number;
// }

// set number(value: string) {
//     this.#number = value;
// }

// // 
// get origin(): string {
//     return this.#origin;
// }

// set origin(value: string) {
//     this.#origin = value;
// }

// // 
// get destination(): string {
//     return this.#destination;
// }

// set destination(value: string) {
//     this.#destination = value;
// }

// //  (read-only):
// get departed(): boolean {
//     return this.#departed;
// }

// //  (read-only):
// get landed(): boolean {
//     return this.#landed;
// }


// }