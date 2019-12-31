function countNumbers(input){
    let num = new Object();
    
    for (let i=0; i<10; i++){
        let count = 0;
        for (let j=0; j<input.length; j++){
            if (input[j] === i.toString(10)){
                count++;
            }
        }
        if (count !== 0){
            num[`'${i}'`] = count;
    
        }
    }
    return num;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));