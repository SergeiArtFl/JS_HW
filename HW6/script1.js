//Задание №1

document.write('<br/><br/> Задание №1.<br/><br/>');
let str1 = 'aaa@bbb@ccc';
document.write('До замены: '+str1+'<br/>После замены: '+str1.replace(/@/g, '!'));

//Задание №2

document.write('<br/><br/> Задание №2.<br/><br/>');
let date = new Date('2025-12-31'),
	year = date.getFullYear(), 
	month = date.getMonth() + 1, 
	day = date.getDate();

document.write('Измененный фортам даты: '+day+'/'+month+'/'+year);

//Задание №3

document.write('<br/><br/> Задание №3.<br/><br/>');

let str3 = 'Я учу javascript!';
document.write('Вырезание слов при помощи substring: '+str3.substring(2, 5)+ ', ' +str3.substring(6, 16)+'.<br/>');
document.write('Вырезание слов при помощи substr: '+str3.substr(2, 3)+ ', ' +str3.substr(6, 10)+'.<br/>');
document.write('Вырезание слов при помощи slice: '+str3.slice(2, 5)+ ', ' +str3.slice(6, 16)+'.<br/>');

//Задание №4

document.write('<br/><br/> Задание №4.<br/><br/>');
let arr4 = [4,2,5,19,13,0,10],
	sum4 = 0,
	sqrt4 = 0;
for (let i = 0; i < arr4.length; i++){
	arr4[i] = Math.pow(arr4[i], 3);
	sum4 += arr4[i];
}
sqrt4 = Math.sqrt(sum4);
document.write('Корень квадратный из суммы кубов элементов массива: '+sqrt4);

//Задание №5

document.write('<br/><br/> Задание №5.<br/><br/>');

function z5(a,b) {
	c = Math.abs(a-b);
	document.write('Резльтат вычисления: '+c+'<br/>');
}
 z5(3,5);
 z5(6,1);
 
 //Задание №6

document.write('<br/><br/> Задание №6.<br/><br/>');
 
 function z6(a6){
	let dayOfMonth = a6.getDate(),
		month = a6.getMonth() + 1,
		year = a6.getFullYear(),
		hour = a6.getHours(),
		minutes = a6.getMinutes(),
		seconds = a6.getSeconds();
	
	month = month < 10 ? '0' + month : month;
	dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
	return document.write('<br/>Измененный фортам времени-даты: '+hour+':'+minutes+':'+seconds+' '+dayOfMonth+'.'+month+'.'+year+'.'); 
 }
 let dateNow = new Date();
 document.write(dateNow);
 z6(dateNow);
 
  //Задание №7

document.write('<br/><br/> Задание №7.<br/><br/>');

let str7 = 'aa aba abba abbba abca abea';
document.write('Результат поиска: ' +str7.match(/ab+a/g));


  //Задание №8 

document.write('<br/><br/> Задание №8.<br/><br/>');

function z8(a8){
	result = /^\+[1-9]{1}[0-9]{0,3}[0-9]{2,4}[0-9]{6,7}$/g.test(a8);
	document.write(result);
	
}
/*let tel = prompt('Введите номер телефона в международном формате(<код страны><код города или сети><номер телефона>: +375291234567)');
z8(tel);*/

 //Задание №9

document.write('<br/><br/> Задание №9.<br/><br/>');

function z9(a9){
	result = /^[a-zA-Z]{1}[a-zA-Z0-9]+@[a-z]{2,11}\.[a-z]{2,11}$/i.test(a9);
	document.write(result);
	
}
/*let mail = prompt('Введите адрес электронной почты');
z9(mail);*/

 //Задание №10

document.write('<br/><br/> Задание №10.<br/><br/>');

function z10(a10){
	
document.write('Результат поиска: ' +a10.match(/^https:\/{2}[\w-\.]*\.[a-z]{2,4}/));
console.log(a10.match(/^https:\/{2}[\w-\.]*\.[a-z]{2,4}/));
}
let https = "https://tech.onliner.by/2020/08/30/fsfs-fdf-293/?fkkfkfh_hfhskf=fsf_fhdh&bvbv_jdd=jsddh200#xsd3";
z10(https);