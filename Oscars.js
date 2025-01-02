function oscars(input) {
    let actorName = input.shift();
    let actorPoint = Number(input.shift());
    let evaluative = Number(input.shift());

    for (let i = 0; i <= input.length - 1; i += 2) {
        let currecntEvaluativeName = Number(input[i].length);
        let currentEvaluativePoint = Number(input[i + 1]);

        actorPoint += (currecntEvaluativeName * currentEvaluativePoint) / 2;

        if (actorPoint >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoint.toFixed(1)}!`);
            break;
        }
    }

    if (actorPoint < 1250.5) {
        let needPoint = 1250.5 - actorPoint;
        console.log(`Sorry, ${actorName} you need ${needPoint.toFixed(1)} more!`)
    }
}

oscars(
    [
        "Zahari Baharov",
        "205",
        "4",
        "Johnny Depp",
        "45",
        "Will Smith",
        "29",
        "Jet Lee",
        "10",
        "Matthew Mcconaughey",
        "39"
    ]
)