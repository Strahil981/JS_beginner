function bankBalance(input) {
    let total = 0;

    let i = 0;
    while (i < input.length) {
        if (input[i] == "NoMoreMoney") {
            break;
        }
        if (Number(input[i]) < 0) {
            console.log("Invalid operation!");
            break;
        }
        else {
            console.log(`Increace: ${Number(input[i])}`);
            total += Number(input[i]);
        }
        i++;
    }

    console.log(`Total: ${total}`);
}

bankBalance(
    [
        "120",
        "45.55",
        "-150"
    ]
)