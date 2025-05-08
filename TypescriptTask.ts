function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        let convertLower: string = input.toLowerCase();
        return convertLower;
    } else {
        let convertUpper: string = input.toUpperCase();
        return convertUpper;
    }
}

function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[] {
    let ratingBooks: {title: string; rating: number}[] = [];
    for (const item of items) {
        if (item.rating >= 4) {
            ratingBooks.push(item);
        }
    }
    return ratingBooks;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concateArray: T[] = [];
    for (const array of arrays) {
        for (const item of array) {
            concateArray.push(item);
        }
    }
    return concateArray;
}

class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof value == "string") {
        const strLen: number = value.length;
        return strLen;
    } else {
        const multipliedValue: number = value * 2;
        return multipliedValue;
    }
}

interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        let highestPrice: number = products[0].price;
        let highestPriceIndx: number = 0;
        for (let i = 1; i < products.length; i++) {
            if (products[i].price > highestPrice) {
                highestPriceIndx = i;
            }
        }

        return products[highestPriceIndx];
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}
function getDayType(day: Day): string {
    if (day === 5 || day === 6) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject("Error: Negative");
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    });
}
