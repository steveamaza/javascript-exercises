const reverseString = function(input) {
    function reverseArray(statement) {
        let newStatement = [];
        for(let index=statement.length-1; index>=0; index--) {
            newStatement.push(statement[index])
        }
        return newStatement;
    }
    return reverseArray(input.split(" "))
    .map((word) => reverseArray(word).join(""))
    .join(" ");
};

// Do not edit below this line
module.exports = reverseString;
