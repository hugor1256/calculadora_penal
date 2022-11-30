import { Crime } from '../interfaces/crime';

export const allCrimes: Crime[] = [
    {
        crime: 'ATROPELAMENTO',
        type: 'TRÂNSITO',
        months: 40,
        trafficTicket: 30000,
        haveBail: false,
    },
    {
        crime: 'ALTA VELOCIDADE',
        type: 'TRÂNSITO',
        months: 0,
        trafficTicket: 10000,
        haveBail: false,
    }
];