function seriesOfNumber(number) {
    let counter = 1;

    while (counter <= Number(number)) {
        console.log(counter);
        counter = 2 * counter + 1;
    }
}

seriesOfNumber("31")