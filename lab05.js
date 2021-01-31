alert('programming languages option');
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

var message=' ';
var result= ' ';

document.write(language);
var result= ' '

result=language;

document. write(result);
var option = prompt (' do you want HTML or CSS language?');

while (option !=='HTML' && option!=='CSS'){
    option= prompt('please choose either HTML or CSS')
}

if (option === 'HTML'){
    language =' <img src="CODING-SCHOOL/html.png"/>'
} else if (option ==="CSS"){
    language='<img src="CODING-SCHOOL/CSS.png/>'
}

