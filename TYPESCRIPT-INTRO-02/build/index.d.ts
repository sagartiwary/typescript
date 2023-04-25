interface obj1 {
    title: string;
    status: boolean;
    id: number;
}
interface obj2 extends obj1 {
    firstName: string;
    lastName?: string;
}
declare let newObj: obj2;
declare function getName(newObj: any): any;
interface Address {
    houseNumber: string | number;
    street: string | number;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonalDetails {
    phones: number[];
    address: string[];
    email?: string | number;
    firstName: string;
    lastName: string;
    middleName?: string;
}
