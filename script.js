'use strict'

function askUserNameQuestion(){
    var userName = prompt('Please Enter Your Name');
        if (userName == 'Ameilia') {
            document.write('Whattup' + userName)
        } else {document.write ('Welcome ' + userName + '!');
    }
}    

function askCombatPreference(){
    var question1 = prompt('What do you want to be your main combat attribute: magic, stamina, or stealth?');
        if (question1 == 'magic') {
            document.write('You should be a High Elf!')
        }
        if (question1 == 'stamina') {
            document.write('You should be a Wood Elf!')
        }
        if (question1 == "stealth") {
            document.write("You should be a Khajiit!")
        } 
 }    
    
function greetBasedOnTime(){    
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Henlo!'
    }

    document.write('<h3>' + greeting + '</h3>');
}

function askUserOpinion(){
    var userAnswer = prompt('Arent RPGs the Coolest?');
        if (userAnswer = "yes" || "yup" || "for sure" || "absolutely" || "yeah"){
            alert('This guy gets it!')
        } else {
            alert('Wrong answer buddy')
        }
}


