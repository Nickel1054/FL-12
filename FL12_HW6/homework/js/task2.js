let a = prompt('Enter first side length of a triangle: ', 0);

if (a <= 0){
    alert('A triangle must have 3 sides with a positive definite length');
} else if (typeof a === 'undefined' || a === ''|| typeof a !== 'number'){
    alert('Input values should be ONLY numbers');
}

let b = prompt('Enter second side length of a triangle: ', 0);

if (b <= 0){
    alert('A triangle must have 3 sides with a positive definite length');
} else if (typeof b === 'undefined' || b === ''|| typeof b !== 'number'){
    alert('Input values should be ONLY numbers');
}

let c = prompt('Enter third side length of a triangle: ', 0);

if (c <= 0){
    alert('A triangle must have 3 sides with a positive definite length');
} else if (typeof c === 'undefined' || c === '' || typeof c !== 'number'){
    alert('Input values should be ONLY numbers');
}

if (a+b>c && a+c>b && b+c>a){
    if (a === b && a === c){
        console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c){
        console.log('Isosceles triangle');
    } else{
        console.log('Scalene triangle');
    }

}else{
    console.log('Triangle doesn’t exist');
    alert('Triangle doesn’t exist');
}