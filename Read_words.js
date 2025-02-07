function readWords(input) {
    let i = 0;

    while(i <= input.length - 1){
        if(input[i] == "Stop"){
            break;
        }
        else{
            console.log(input[i])
        }
        i++;
    }
}

readWords(
    [
        "Nakov",
        "SoftUni",
        "Sofia",
        "Bulgaria",
        "SomeText",
        "Stop",
        "AfterStop",
        "Europe",
        "HelloWorld"
    ]
)    