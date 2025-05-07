"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        let convertUpper = input.toUpperCase();
        return convertUpper;
    }
    else {
        let convertLower = input.toLowerCase();
        return convertLower;
    }
}
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"
