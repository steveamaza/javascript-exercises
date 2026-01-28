const palindromes = function (input) {
    let splitInput = input.replace(/ /g, "").toLowerCase().split("");
    let splitInputReversed = splitInput.toReversed();

    return splitInput.every((ch, i) => ch === splitInputReversed[i]);

    }

// Do not edit below this line
module.exports = palindromes;
