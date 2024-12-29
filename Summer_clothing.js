function summerClothing(degree, timeOfDay) {
    let outfit = "";
    let shoes = "";

    if (timeOfDay == "Morning") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (degree > 18 && degree <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degree >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    else if (timeOfDay == "Afternoon") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degree > 18 && degree <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (degree >= 25) {
            outfit = "Swim suit";
            shoes = "Barefoot";
        }
    }
    else if (timeOfDay == "Afternoon") {
        if (degree >= 10 && degree <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degree > 18 && degree <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degree >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}

summerClothing(22, "Afternoon")