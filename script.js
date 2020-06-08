function ageInDays(){
    var birthYear = prompt('what is your birthyear my friend :))');
    var ageInDayss=(2020-birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer = document.createTextNode('you are '+ageInDayss+' days my best friend');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1); 
  
}

function reset(){
    document.getElementById('ageInDays').remove();
}

