function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        let convertLower: string = input.toLowerCase();
        return convertLower;
    } else {
        let convertUpper: string = input.toUpperCase();
        return convertUpper;
    }
}

const value1 = formatString("Hello"); // Output: "HELLO"
const value2 = formatString("Hello", true); // Output: "HELLO"
const value3 = formatString("Hello", false); // Output: "hello"
console.log(`${value1}\n${value2}\n${value3}`);

function filterByRating(items: {title: string; rating: number}[]): {title: string; rating: number}[] {
    let ratingBooks = [];
    for (const item of items) {
        if (item.rating >= 4) {
            ratingBooks.push(item);
        }
    }
    return ratingBooks;
}

const books: {title: string; rating: number}[] = [
    {title: "Book A", rating: 4.5},
    {title: "Book B", rating: 3.2},
    {title: "Book C", rating: 5.0},
];

const rateBooks: {title: string; rating: number}[] = filterByRating(books);
console.log(rateBooks);

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concateArray: T[] = [];
    for (const array of arrays) {
        for (const item of array) {
            concateArray.push(item);
        }
    }
    return concateArray;
}

const outputConcateArray1 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const outputConcateArray2 = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(outputConcateArray1);
console.log(outputConcateArray2);

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
console.log(myCar.getInfo());
console.log(myCar.getModel());
