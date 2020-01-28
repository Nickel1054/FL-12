const rootNode = document.getElementById('root');
const newSet = document.getElementById('create');
const check = document.getElementById('check');
const stud = document.getElementById('stud');
const clear = document.getElementById('clear');


const addNew = function(){
    localStorage.setItem(String(localStorage.length+1), 'unstudied');
}

const addStud = function(){
    localStorage.setItem(String(localStorage.length+1), 'studied');
}

const show = function(){
    console.log(localStorage);
}

const clr = function(){
    localStorage.clear();
}

newSet.addEventListener('click', addNew);
check.addEventListener('click', show);
stud.addEventListener('click', addStud);
clear.addEventListener('click', clr);

const sets = function(n){
    const blocks = document.getElementById('blocks');
    const set = document.createElement('div');
    console.log(localStorage.getItem(n));
    if(localStorage.getItem(n) === 'studied'){
        set.className = 'set studied';
    }else{
        set.className = 'set unstudied';
    }
    blocks.appendChild(set);
}

if (localStorage.length){
    for(let i=1; i<=localStorage.length; i++){
        if (localStorage.getItem(i) !== null){
            sets(i);
        }
    }
}