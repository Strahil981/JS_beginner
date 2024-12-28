function hotelRoom(month, days){
    let studio_price = 0;
    let apartment_price = 0;

    if(month == "май" || month == "октомври"){
        studio_price = 50;
        apartment_price = 65;
        if(days > 7 && days <= 14){
            studio_price -= studio_price * 0.05;
        }
        else if(days > 14){
            studio_price -= studio_price * 0.30;
            apartment_price -= apartment_price * 0.10;
        }
    }
    else if(month == "юни" && month == "септемри"){
        studio_price = 75.20;
        apartment_price = 68.70;
        if(days > 14){
            studio_price -= studio_price * 0.20;
            apartment_price -= apartment_price * 0.10;
        }
    }
    else if(month == "юли" && month == "август"){
        if(days > 14){
            apartment_price -= apartment_price * 0.10;
        }
    }

    let studio_sum  = days * studio_price;
    let apartment_sum = days * apartment_price;

    console.log(`Apartment: ${apartment_sum.toFixed(2)} lv.`);
    console.log(`Studio: ${studio_sum.toFixed(2)} lv.`);
}

hotelRoom("май", 15)