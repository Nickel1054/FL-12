let email = prompt('Please enter your E-mail: ', '');
let pswrd = '';

const minmail = 5;
const minpass = 6;

if (email === '' || email === null){ 
    alert('Canceled.');
}else if (email.length < minmail){
    alert('I don\'t know any emails having name length less than 5 symbols');
}else if (email === 'user@gmail.com' || email === 'admin@gmail.com'){
    pswrd = prompt('Please enter your password: ', '');
    if (pswrd === '' || pswrd === null){ 
        alert('Canceled.');
    }else if(email === 'user@gmail.com' && pswrd === 'UserPass' || 
            email === 'admin@gmail.com' && pswrd === 'AdminPass'){
        if (confirm('Do you want to change your password?')){
            let oldpswrd = prompt('Please enter your old password: ', '');
            if (email === 'user@gmail.com' && oldpswrd === 'UserPass' || 
                email === 'admin@gmail.com' && oldpswrd === 'AdminPass'){
                let newpswrd = prompt('Please enter new password: ', '');

                if (newpswrd === '' || newpswrd === null){
                    alert('Canceled.');
                } else if (newpswrd.length < minpass){
                    alert('It’s too short password. Sorry.');
                }else{
                    let check = prompt('Please enter new password again: ', '');
                    if (newpswrd === check){
                        alert('You have successfully changed your password.');
                    } else{
                        alert('You wrote the wrong password.');
                    }
                }

            }else{
                alert('Wrong password.');
            }
        } else{
            alert('You have failed the change.');
        }
    }else{
        alert('Wrong password.');
    }

}else{
    alert('I don’t know you')
}