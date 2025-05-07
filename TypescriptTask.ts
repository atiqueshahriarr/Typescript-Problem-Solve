function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        let convertLower: string = input.toLowerCase();
        return convertLower;
    } else {
        let convertUpper: string = input.toUpperCase();
        return convertUpper;
    }
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[] {
    let ratingBooks = [];
    for (const item of items) {
        if (item.rating >= 4) {
            ratingBooks.push(item);
        }
    }
    return ratingBooks;
}
const books = [
    {title: "Book A", rating: 4.5},
    {title: "Book B", rating: 3.2},
    {title: "Book C", rating: 5.0},
];
filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concateArray: T[] = [];
    for (const array of arrays) {
        for (const item of array) {
            concateArray.push(item);
        }
    }
    return concateArray;
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

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
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
    if (typeof value == "string") {
        const strLen = value.length;
        return strLen;
    } else {
        const multipliedValue = value * 2;
        return multipliedValue;
    }
}
processValue("hello");
processValue(10);

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        let highestPrice = products[0].price;
        let highestPriceIndx = 0;
        for (let i = 1; i < products.length; i++) {
            if (products[i].price > highestPrice) {
                highestPriceIndx = i;
            }
        }

        return products[highestPriceIndx];
    }
}
const products = [
    {name: "Pen", price: 10},
    {name: "Notebook", price: 25},
    {name: "Bag", price: 50},
];
getMostExpensiveProduct(products);

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
getDayType(Day.Monday);
getDayType(Day.Sunday);

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
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
