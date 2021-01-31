console.log('Hello');
var userName = 'Reem';
console.log(userName);
alert('welcome in CSS');
var message = ' '


/* alert('programming languages option');
var level= prompt('what is your progmming level')


if (level=="junior"){
    document.write(' you are a junior programmer')
}
else if (level == 'senior'){
    document.write ('you are senior programmer')
} else{
    document.write('this page for programming learn')
}


var language=' ';
if (level === 'junior'){
    language='<img src="html.png"/>';
    console.log(language);
} else if (level === 'senior'){
    language= '<img src="CSS.png"/>';
}

document.write(language);
var result= ' '

result=language;

document. write(result);*/

var option = prompt (' do you want HTML or CSS language?');

while (option !=='HTML' && option!=='CSS'){
    option= prompt('please choose either HTML or CSS')
}

function codinglanguage() {
    var language=' ';

    var level= prompt('what is your progmming level');
    console.log (level);

    if (option === 'HTML'){
        language =' <img src="CODING-SCHOOL/html.png"/>'
    } else if (option ==="CSS"){
        language='<img src="CODING-SCHOOL/CSS.png/>'
    } 
//code    
var message=' ';
if (level =="junior"){
    message=' you are a junior programmer';
}
else if (level == 'senior'){
    message='you are senior programmer';
} else{
    message='this page for programming learn';

}


return document.write(message);
}

var result= '';
var levelnumber =prompt('how many level you want to learn');

for(var i=0; i<levelnumber; i++){
    console.log(i);
    result=result + language;
}