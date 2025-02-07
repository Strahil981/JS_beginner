function sumOfNumbers(input) {
    let myNumber = Number(input.shift());
    let sum = 0;

    let i = 0;
    while (i < input.length) {
        let currentNumber = Number(input[i]);

        if (sum < myNumber) {
            sum += currentNumber;
        }
        else {
            break;
        }
        i++;
    }
    console.log(sum)
}

sumOfNumbers(
    [
        "20",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
    ]
)    