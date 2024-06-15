
export interface CarInterface {
    name: string;
    description: string;
    color: string;
    isElectric: boolean;
    status: 'available' | 'notAvailable';
    feature: string[];
    pricePerHour: number;
    isDeleted: boolean
}