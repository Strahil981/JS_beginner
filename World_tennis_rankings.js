function worldTennisRankings(input) {
    let turnirsQuantity = Number(input.shift());
    let startPoint = Number(input.shift());
    let bonusPoint = 0;
    let averagePoint = 0;
    let winTurnirs = 0;
    let percent = 0;

    for (let i = 0; i < turnirsQuantity; i++) {
        let currentTurnir = input[i];

        if (currentTurnir == "F") {
            bonusPoint += 1200;
            startPoint += 1200;
        }
        else if (currentTurnir == "W") {
            bonusPoint += 2000;
            startPoint += 2000;
            winTurnirs++;
        }
        else if (currentTurnir == "SF") {
            bonusPoint += 720;
            startPoint += 720;
        }
    }
    averagePoint = bonusPoint / turnirsQuantity;
    percent = (winTurnirs / turnirsQuantity) * 100;

    console.log(`Final points: ${startPoint}`);
    console.log(`Average points: ${Math.floor(averagePoint)}`);
    console.log(`${percent.toFixed(2)}%`);

}

worldTennisRankings(
    [
        "7",
        "1200",
        "SF",
        "F",
        "W",
        "F",
        "W",
        "SF",
        "W"
    ]
)