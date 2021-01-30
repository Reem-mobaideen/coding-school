console.log('Hello');
var userName = 'Reem';
//console.log(userName);
//alert('welcome in CSS');
//var message = ' '


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


var message=' ';
var result= ' ';




/* var FontWeight = prompt('How would the font shape look like?');
console.log(FontWeight);
if (FontWeight == 'normal') {
    message = 'The font shape is normal'

} else if (FontWeight == 'bold') {
    message = 'The font shape is thick'
} else {
    message = 'The font shape is thicker'
}   */
 document.write('<h2>' + message +'</h2>');    
document.write(result);






