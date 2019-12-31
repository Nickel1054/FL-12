function isLeapYear(input){
    let date = new Date(input);

    if (date.toString() === 'Invalid Date'){
        return 'Invalid Date';
    }

    let year = date.getFullYear();
    let yes = ' is a leap year'
    let no = ' is not a leap year'
    
    if (year%4 === 0){
        if (year%100 === 0 && year%400 !== 0){
            return year.toString(10) + no;
        } else{
            return year.toString(10) + yes;
        }
    }else{
        return year.toString(10) + no;
    }
}

console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));  
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));
