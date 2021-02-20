//--------------------------------------------------task1---------------------------------------------------
// кількість URL в історії сторінки та кількість абзаців на сторінці.
let paragraphs= document.getElementsByTagName('p');
alert(`The number of URL's in the history list is: ${window.history.length}.The number of paragraphs is ${paragraphs}`);

//--------------------------------------------------task2---------------------------------------------------
//Поміняти кольори у всіх тегах заданого класу на колір, який користувач обрав
let color= document.getElementById('color');
let tagName= document.getElementById('tagName');
let button1= document.getElementById('button1');

button1.onclick=(ev)=>{
    let allTags= document.getElementsByTagName(tagName.value);
    for(let el of allTags){
        el.style.backgroundColor=color.value;
    }
    ev.preventDefault();
}

//--------------------------------------------------task3---------------------------------------------------
/*  питання “Чи бажаєте побачити властивості операційної системи?».”.
Якщо користувач натиснув “ок”, вивести всю доступну інформацію. У
протилежному випадку, вивести повідомлення “Користувач відмовився” і
додатково вивести інформацію про браузер яким було відкриту сторінку. */

if(confirm('Чи бажаєте побачити властивості операційної системи?')){
    alert(navigator.oscpu);
}else{
    alert('Користувач відмовився. Інформація про браузер:'+navigator.userAgent)
}

//--------------------------------------------------task4---------------------------------------------------
//На html-сторінки з’являється діалогове вікно alert.сторінці розміщено дві кнопки. При натисканні на кнопку №1
// відкривається нове вікно з заданими параметрами. При натисканні на кнопку
// №2 нове вікно закривається. В нове вікно має бути завантажено сайт НУ
// «Львівська політехніка»
let openWindowButton= document.getElementById('openWindow');
let closeWindowButton1= document.getElementById('closeWindow');
let newWin;

openWindowButton.onclick=(ev)=>{
    newWin = window.open("https://lpnu.ua/", "lpnu", "width=600,height=400,location=yes");
    ev.preventDefault();
}
closeWindowButton1.onclick=(ev)=>{
    newWin.close();
    ev.preventDefault();
}