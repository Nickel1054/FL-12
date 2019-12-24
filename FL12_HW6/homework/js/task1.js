let check = 1;
let four = 4;
let two = 2;

let a = prompt('Enter a: ', '0');

if (a === '0' || isNaN(a)){
    console.log('Invalid input data');
}

let b = prompt('Enter b: ', '0');

if (isNaN(b)){
    console.log('Invalid input data');
}

let c = prompt('Enter c: ', '0');

if (isNaN(c)){
    console.log('Invalid input data');
}


let discriminant = b*b - four*a*c;

if (discriminant < 0){
    console.log('No possible answers (D < 0)');
}else if (discriminant === 0){
    let x = -b/(two*a);
    console.log('x = ' + Math.round(x));
}else{
    let x1 = (-b - Math.sqrt(discriminant))/(two*a);
    let x2 = (-b + Math.sqrt(discriminant))/(two*a);
    console.log('x1 = ' + Math.round(x1) + ' and x2 = ' + Math.round(x2));
}