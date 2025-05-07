function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        let convertLower: string = input.toLowerCase();
        return convertLower;
    } else {
        let convertUpper: string = input.toUpperCase();
        return convertUpper;
    }
}

let value1 = formatString("Hello"); // Output: "HELLO"
let value2 = formatString("Hello", true); // Output: "HELLO"
let value3 = formatString("Hello", false); // Output: "hello"
console.log(`${value1}\n${value2}\n${value3}`);
