function landscapingOfYard(squartMeters){
    let priceFromLandscaping = squartMeters * 7.61;
    let discound = priceFromLandscaping * 0.18;
    let needPrice = priceFromLandscaping - discound;

    console.log(`The final price is: ${needPrice} lv.`);
    console.log(`The discount is: ${discound} lv.`);
}

landscapingOfYard(150)