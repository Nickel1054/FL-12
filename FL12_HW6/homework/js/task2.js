let check = 1;

while(check === 1){
    var a = prompt('Enter first side length of a triangle: ', 0);

    if (a <= 0){
        alert('A triangle must have 3 sides with a positive definite length');
    } else if (typeof a === 'undefined' || a === ''){
        alert('Input values should be ONLY numbers');
    }else{
        break;
    }
}

while(check === 1){
    var b = prompt('Enter second side length of a triangle: ', 0);

    if (b <= 0){
        alert('A triangle must have 3 sides with a positive definite length');
    } else if (typeof b === 'undefined' || b === ''){
        alert('Input values should be ONLY numbers');
    }else{
        break;
    }
}

while(check === 1){
    var c = prompt('Enter third side length of a triangle: ', 0);

    if (c <= 0){
        alert('A triangle must have 3 sides with a positive definite length');
    } else if (typeof c === 'undefined' || c === ''){
        alert('Input values should be ONLY numbers');
    }else{
        break;
    }
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