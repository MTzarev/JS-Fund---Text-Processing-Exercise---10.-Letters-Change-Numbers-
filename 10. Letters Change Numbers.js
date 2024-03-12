function lettersChangeNumbers(input) {
    let string = input.trim().split(/\s+/);

    let finalSum = 0
    for (let element of string) {
        let firstLetter = element[0];
        let lastLetter = element.slice(-1);
        let num = element.slice(1, -1);
        if (firstLetter.toUpperCase() === firstLetter) {
            num = num / (Number(firstLetter.charCodeAt(0)) - 64);

        }
        else {
            num = num * (Number(firstLetter.charCodeAt(0)) - 96);

        }
        if (lastLetter.toUpperCase() === lastLetter) {
            num = num - (Number(lastLetter.charCodeAt(0)) - 64);

        }
        else {
            num = num + (Number(lastLetter.charCodeAt(0)) - 96);

        }
        finalSum += num;
    }
    finalSum = Number(finalSum)
    console.log(finalSum.toFixed(2));
    

}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f H456z');
lettersChangeNumbers('a1A');




//let letter = "a"
//let letterPos = Number(letter.charCodeAt(0)) - 96;