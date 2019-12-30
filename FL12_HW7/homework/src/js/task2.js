let incr = 4;
let one = 1;
let two = 2;
let maxattempt = 3;

if (confirm('Do you want to play a game?')){

    let playing = true;
    let maxprize = 100;
    
    while(playing){
        let sum = 0;
        let attempt = maxattempt;
        let maxguess = 9;
        let prize = maxprize;
        let number = Math.floor(Math.random()*maxguess);
        console.log('New');
        console.log('Number: ' + number);
        

        while (attempt > 0){
            let guess = parseInt(prompt('Choose a roulette pocket number from 0 to ' + (maxguess-one) + '\n' +
            'Attempts left: ' + attempt + '\n' + 
            'Total prize: ' + sum + '$\n' + 
            'Possible prize on current attempt: ' + prize + '$', ''));
            
            if (guess === number){

                if (confirm('Congratulation, you won! Your prize is: ' + prize + 
                '$. Do you want to continue?')){
                    sum += prize;
                    maxguess += incr;
                    maxprize *= two;
                    prize = maxprize;

                    attempt = maxattempt;
                    number = Math.floor(Math.random()*maxguess);
                    console.log('Number: ' + number);
                }else{
                    break;
                }
            }else{
                attempt--;
                prize = prize/two;
            }
        }
        alert('Thank you for your participation. Your prize is: ' + sum + ' $');
        
        if(!confirm('Do you want to play again?')){
            playing = false;
        }
    }
}else{
    alert('You did not become a billionaire, but can.');
}