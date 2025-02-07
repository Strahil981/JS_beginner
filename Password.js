function password(input) {
    let userName = input.shift();
    let myPassword = input.shift();

    let i = 0;
    while (i < input.length) {
        let currentPassword = input[i];

        if(currentPassword == myPassword){
            console.log(`Welcome ${userName}!`);
            break;
        }
        i++;
    }
}

password(
    [
        "Nakov",
        "1234",
        "Pass",
        "1324",
        "1234"
    ]
)    