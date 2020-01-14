function convert(){
    let answ = [];
    let num = arguments.length;
    console.log(num);
    for (let i=0; i<arguments.length; i++){
        if (typeof arguments[i] === 'number'){
            answ.push(arguments[i].toString());
        } else if (typeof arguments[i] === 'string'){
            answ.push(Number(arguments[i]));
        }
    }
    console.log(answ);
    return answ;
}


function func(el){
    console.log(el * 2);
}

function executeforEach(arr, func){
    for (let i=0; i<arr.length; i++){
        func(arr[i]);
    }
}


function callback(arg){
    return arg + 3;
}

function mapArray(arr, func){
    let answ = [];
    for (let i=0; i<arr.length; i++){
        if (typeof arr[i] === 'number'){
            answ.push(func(arr[i]));
        } else if (typeof arr[i] === 'string'){
            answ.push(func(Number(arr[i])));
        }
    }
    return answ;
}


function fun(a){
    return a%2 === 0;
}

function filterArray(arr, func){
    let answ = [];
    for (let i=0; i<arr.length; i++){
        if (func(arr[i])){
            answ.push(arr[i]);
        }
    }
    return answ;
}


function flipOver(word){
    let answ = '';
    for (let i=word.length-1; i>=0; i--){
        answ += word[i];
    }
    return answ;
}


function makeListFromRange(range){
    let answ = [];
    for (let i=range[0]; i<=range[1]; i++){
        answ.push(i);
    }
    return answ;
}


const actors = [
    {name: 'tommy', age:36},
    {name: 'lee', age: 28}
];

function getArrayOfKeys(arr, key){
    let answ = [];
    for (let i=0; i<arr.length; i++){
        answ.push(arr[i][key]);
    }
    return answ;
}


function substitute(arr){
    let answ = [];
    for (let i=0; i<arr.length; i++){
        if (arr[i] < 30){
            answ.push('*');
        }else{
            answ.push(arr[i]);
        }
    }
    return answ;
}


const dat = new Date(2019, 0, 2);

function getPastDate(date, N){
    let newDate = new Date();
    newDate.setDate(date.getDate() - N);
    return newDate.getDate();
}


function formatDate(date){
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}
