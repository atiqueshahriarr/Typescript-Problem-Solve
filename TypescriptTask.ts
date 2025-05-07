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
