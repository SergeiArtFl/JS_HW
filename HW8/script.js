// head
let html = document.querySelector('html'); 
html.setAttribute('lang', 'en'); 

let title = document.createElement('title');
title.innerHTML = 'HW 8';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let metaHttp = document.createElement('meta');
metaHttp.setAttribute('http-equiv', 'X-UA-Compatible');
metaHttp.setAttribute('content', 'IE=edge');
document.head.appendChild(metaHttp);

let metaView = document.createElement('meta');
metaView.setAttribute('name', 'viewport');
metaView.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaView);

// head => style
let style = document.createElement('style');
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

*{
    margin: 0;
    padding: 0;
}
.body_style{
    background-color:#E5E5E5;
}
.container{
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    background-color:#FFFFFF;
    
}
.button{
    font-family: 'Montserrat';
    background-color: #11ffee00;
    text-transform: uppercase;
    border: 3px solid #FFC80A;
    border-radius: 30px;
    padding: 15px 30px;
    cursor: pointer;
    margin-top: 60px;
}
.flex{
    display: flex;
    justify-content: center;
    padding-bottom: 140px;
}
.item_0{
    padding-top: 120px;
    padding-bottom: 60px;
    text-align: center;
    
}
.item_1{
    padding: 80px 95px;
    text-align: center;
    border: 1px solid #E8E9ED;
    border-radius: 5px 0 0 5px;
}
.text_1{
    font-family: 'Arvo';
    line-height: 48px;
    font-size: 36px;
}
.text_2{
    color: #9FA3A7;
    font-family: 'Open Sans';
    line-height: 26px;
    font-size: 14px;
}
.text_3{
    color: #9FA3A7;
    font-family: 'Montserrat';
    line-height: 15px;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 20px;
}
.bg{
    background-color:#8F75BE;
    border-radius: 0 5px 5px 0;
}
.text_color1{
    color: #FFC80A;
}
.text_color2{
    color: #FFFFFF;
}
.padd1{
    padding-top: 10px;
}
.padd2{
    padding-top: 30px;
}
`;
document.head.appendChild(style); 

//body
document.body.classList.add('body_style');

// body => header
let header = document.createElement('header'); 
header.classList.add('container', 'item_0'); 
document.body.appendChild(header);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.classList.add('text_1');
header.appendChild(h1);

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1.classList.add('text_2', 'padd1');
header.appendChild(p1);

// body => section
let section = document.createElement('section'); 
section.classList.add('container', 'flex'); 
document.body.appendChild(section);

let div1 = document.createElement('div');
div1.classList.add('item_1');
section.appendChild(div1);

let p2 = document.createElement('p');
p2.innerHTML = 'Freelancer';
p2.classList.add('text_3');
div1.appendChild(p2);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially <br\>designed to';
h2.classList.add('text_1');
div1.appendChild(h2);

let p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this <br\>mistaken idea of denouncing';
p3.classList.add('text_2', 'padd2');
div1.appendChild(p3);

let button = document.createElement('button');
button.innerHTML = 'Start here';
button.classList.add('button');
div1.appendChild(button);


let div2 = document.createElement('div');
div2.classList.add('item_1', 'bg');
section.appendChild(div2);

let p4 = document.createElement('p');
p4.innerHTML = 'Studio';
p4.classList.add('text_3', 'text_color1');
div2.appendChild(p4);

let h3 = document.createElement('h2');
h3.innerHTML = 'Initially <br\>designed to';
h3.classList.add('text_1', 'text_color2');
div2.appendChild(h3);

let p5 = document.createElement('p');
p5.innerHTML = 'But I must explain to you how all this <br\>mistaken idea of denouncing';
p5.classList.add('text_2', 'padd2', 'text_color2');
div2.appendChild(p5);

let button1 = document.createElement('button');
button1.innerHTML = 'Start here';
button1.classList.add('button', 'text_color2');
div2.appendChild(button1);

let script = document.querySelector('script'); 
document.body.appendChild(script);

console.log(html);