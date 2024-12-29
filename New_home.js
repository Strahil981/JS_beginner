function newHome(flowerType, flowerQuantity, budget) {
    let rosePrice = 5;
    let dahliaPrice = 3.80;
    let tulipPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;
    let sum = 0;
    let difference = 0;

    if (flowerType == "Roses") {
        sum = flowerQuantity * rosePrice;
        if (flowerQuantity >= 80) {
            sum -= sum * 0.10;
        }
    }
    else if (flowerType == "Dahlias") {
        sum = flowerQuantity * dahliaPrice;
        if (flowerQuantity >= 90) {
            sum -= sum * 0.15;
        }
    }
    else if (flowerType == "Tulips") {
        sum = flowerQuantity * tulipPrice;
        if (flowerQuantity >= 80) {
            sum -= sum * 0.15;
        }
    }
    else if (flowerType == "Narcissus") {
        sum = flowerQuantity * narcissusPrice;
        if (flowerQuantity < 120) {
            sum += sum * 0.15;
        }
    }
    else if (flowerType == "Gladiolus") {
        sum = flowerQuantity * gladiolusPrice;
        if (flowerQuantity < 80) {
            sum += sum * 0.20;
        }
    }

    if (sum > budget) {
        difference = (sum - budget).toFixed(2);
        console.log(`Not enough money, you need ${difference} leva more.`);
    }
    else {
        difference = (budget - sum).toFixed(2);
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${difference} leva left.`);
    }
}

newHome("Roses", 55, 250)
newHome("Tulips", 88, 260)