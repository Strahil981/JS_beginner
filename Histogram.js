function histogram(input) {
    let quantityNumber = Number(input.shift());
    let percent1 = 0;
    let percent1Number = 0;
    let percent2 = 0;
    let percent2Number = 0;
    let percent3 = 0;
    let percent3Number = 0;
    let percent4 = 0;
    let percent4Number = 0;
    let percent5 = 0;
    let percent5Number = 0;

    for (let i = 0; i < quantityNumber; i++) {
        let currentNumber = input[i];

        if (currentNumber < 200) {
            percent1Number++;
        }
        else if (currentNumber >= 200 && currentNumber <= 399) {
            percent2Number++;
        }
        else if (currentNumber >= 400 && currentNumber <= 599) {
            percent3Number++;
        }
        else if (currentNumber >= 600 && currentNumber <= 799) {
            percent4Number++;
        }
        else if (currentNumber >= 800) {
            percent5Number++;
        }
    }

    percent1 = (percent1Number / quantityNumber) * 100;
    percent2 = (percent2Number / quantityNumber) * 100;
    percent3 = (percent3Number / quantityNumber) * 100;
    percent4 = (percent4Number / quantityNumber) * 100;
    percent5 = (percent5Number / quantityNumber) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
}

histogram(
    [
        "9",
        "367",
        "99",
        "200",
        "799",
        "999",
        "333",
        "555",
        "111",
        "9"
    ]
)    