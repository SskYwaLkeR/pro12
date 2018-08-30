var btn = document.querySelector('.rbtn2');
var a = document.querySelector('.cContent');
var b = document.querySelector('.cContent1');
var c = document.querySelector('.cContent2');
var d = document.querySelector('.cContent3');


btn.addEventListener('click',function(){
    a.classList.toggle('hidden');
    b.classList.toggle('show')
    c.classList.add('hidden');
    d.classList.add('hidden');
});