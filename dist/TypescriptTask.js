"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        let convertLower = input.toLowerCase();
        return convertLower;
    }
    else {
        let convertUpper = input.toUpperCase();
        return convertUpper;
    }
}
const value1 = formatString("Hello"); // Output: "HELLO"
const value2 = formatString("Hello", true); // Output: "HELLO"
const value3 = formatString("Hello", false); // Output: "hello"
console.log(`${value1}\n${value2}\n${value3}`);
function filterByRating(items) {
    let ratingBooks = [];
    for (const item of items) {
        if (item.rating >= 4) {
            ratingBooks.push(item);
        }
    }
    return ratingBooks;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
const rateBooks = filterByRating(books);
console.log(rateBooks);
function concatenateArrays(...arrays) {
    let concateArray = [].concat(...arrays);
    return concateArray;
}
const outputConcateArray1 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const outputConcateArray2 = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(`${outputConcateArray1}\n${outputConcateArray2}`);
