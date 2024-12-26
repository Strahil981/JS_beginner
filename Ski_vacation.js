function skiVacation(days, typeRoom, rating) {
    let sleepping = days - 1;
    let price = 0;

    if (typeRoom == "room for one person") {
        price = sleepping * 18;
    }
    else if (typeRoom == "apartment") {
        price = sleepping * 25;
        if (days < 10) {
            price -= price * 0.30;
        }
        else if (days >= 10 && days <= 15) {
            price -= price * 0.35;
        }
        else {
            price -= price * 0.50
        }
    }
    else if (typeRoom == "president apartment") {
        price = sleepping * 35;
        if (days < 10) {
            price -= price * 0.10;
        }
        else if (days >= 10 && days <= 15) {
            price -= price * 0.15;
        }
        else {
            price -= price * 0.20;
        }
    }

    if (rating == "positive") {
        price += price * 0.25;
    }
    else if (rating == "negative") {
        price -= price * 0.10;
    }

    console.log(`The price is: ${price.toFixed(2)} lv.`);
}

skiVacation(14, "apartment", "positive")
skiVacation(30, "president apartment", "negative")