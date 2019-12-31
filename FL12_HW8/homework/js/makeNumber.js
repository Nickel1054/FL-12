function makeNumber(input){
    let num = '';
    for (let i=0; i<input.length; i++){
        for (let j=0; j<10; j++){
            if (input[i] === j.toString(10)){
                num += input[i]
            }
        }
    }
    return num;
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));