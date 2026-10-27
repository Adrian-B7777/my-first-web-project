'use strict';
alert('Hello World');
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
    this.textContent = "Batman";
    } else {
    this.textContent = "Bruce Wayne";
    }

    console.log('current class name: ' + className);
});