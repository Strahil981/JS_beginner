function trekkingMania(input) {
    let numberGroups = Number(input.shift());
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let allPeople = 0;

    for (let i = 0; i < numberGroups; i++) {
        let current_group = Number(input[i]);

        if (current_group <= 5) {
            musala += current_group;
        }
        else if (current_group >= 6 && current_group <= 12) {
            monblan += current_group;
        }
        else if (current_group >= 13 && current_group <= 25) {
            kilimandjaro += current_group;
        }
        else if (current_group >= 26 && current_group <= 40) {
            k2 += current_group;
        }
        else if (current_group >= 41) {
            everest += current_group;
        }

        allPeople += current_group;
    }

    musala = musala / allPeople * 100;
    monblan = monblan / allPeople * 100;
    kilimandjaro = kilimandjaro / allPeople * 100;
    k2 = k2 / allPeople * 100;
    everest = everest / allPeople * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimandjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
}

trekkingMania(
    [
        "10",
        "10",
        "5",
        "1",
        "100",
        "12",
        "26",
        "17",
        "37",
        "40",
        "78"
    ]
)    