//Задание №1

document.write('<br/><br/> Задание №1.<br/><br/>');
function z1(a1, b1, c1) {
	n1 =(a1 - b1)/c1;
	document.write('Результат: ' +n1);
}
 z1(6, 1, 3);


//Задание №2

document.write('<br/><br/> Задание №2.<br/><br/>');
function z2(a2) {
	kub = Math.pow(a2,3);
	kv = Math.pow(a2,2);
	document.write('Куб числа: ' +kub+ '<br/>');
	document.write('Квадрат числа: ' +kv);
}
 z2(6);
 
//Задание №3
//перед запуском раскоментировать
document.write('<br/><br/> Задание №3.<br/><br/>');
// по заданию:
function max (a3, b3){
	if (a3 > b3){
		document.write('Большее число: ' +a3+ '<br/>');
	}else{
		document.write('Большее число: ' +b3+ '<br/>');
	}
}

function min (a3, b3){
	if (a3 > b3){
		document.write('Меньшее число: ' +b3);
	}else{
		document.write('Меньшее число: ' +a3);
	}
}
/*let first = prompt('Введите первое число'),
	second = prompt('Введите второе число');*/
//max(first, second);
//min(first, second);

//мой вариант:
function minmax (a3, b3){
	if (a3 > b3){
		document.write('Большее число: ' +a3+ '<br/>Меньшее число: ' +b3);
	}else{
		document.write('Большее число: ' +b3+ '<br/>Меньшее число: ' +a3);
	}
}
//minmax(first, second);

//Задание №4
//перед запуском раскоментировать
document.write('<br/><br/> Задание №4.<br/><br/>');
let arr4 = [];
function vvod(){
let a4 = prompt('Введите первый элемент массива "а", где "а" - меньшее число'),
	b4 = prompt('Введите последний элемент массива "b", где "b" - большее число');
if (a4 > b4){
	alert('Ошибка ввода. Будьте внимательны!');
}else{
for(let i = a4; i <= b4; i++) {
        arr4.push(i);
    }
}
	document.write('Введенный массив: '+arr4);
}

function vivod(){
    document.write('<br/><br/>Вывод массива: ');
    for(let i = 0; i < arr4.length; i++){
        document.write(arr4[i]+ ' ')
        }
}
//vvod();
//vivod();


//Задание №5

document.write('<br/><br/> Задание №5.<br/><br/>');
function isEven(a5){
	if (a5 % 2 == 0){
		result = true;
		console.log(result);
}else{
	result = false;
	console.log(result);
}
}
isEven(2);

//Задание №6
//перед запуском раскоментировать
document.write('<br/><br/> Задание №6.<br/><br/>');
let arr6 = [],
	arr61 = [];
function z6(){
    let a6 = prompt('Введите целые числа для создания массива. Для завершения ввода введите пустое значение.');
for(let i = 0; a6 != ' '; i++) {
		if (a6%1 !== 0){
			alert('Вы ввели нецелое число!');
			break;
		}
        arr6.push(a6);
        a6 = prompt('Введите числа для создания массива. Для завершения ввода введите пустое значение.');
		if (a6 == ' '){
            alert('Ввод окончен');  
        }
    }
document.write('Введенный массив: '+arr6);
		
for(let i = 0; i < arr6.length; i++){
	isEven(arr6[i]);
	if (result === true){
		arr61.push(arr6[i]);
	}
}

document.write('<br/>Массив из четных чисел: ');
    for(let i = 0; i < arr61.length; i++){
        document.write(arr61[i]+ ' ')
        }

}
//z6();

//Задание №7 перед запуском раскоментировать.

document.write('<br/><br/> Задание №7.<br/><br/>');
/*let n7 = prompt('Введите количество рядов');
function piramida(a7){
if (a7 == ' '){
	alert('Вы вели пустое значение!');
}else if(isNaN (a7)){
	for(let i=1; i <= 9; i++){
    for (let j = 1; j <= i; j++){
        document.write(a7);
    }
document.write('<br/>');
}
} else{	
for(let i=1; i <= a7; i++){
    for (let j = 1; j <= i; j++){
        document.write(i);
    }
document.write('<br/>');
}
}
}
piramida(n7);*/

//Задание №8 перед запуском раскоментировать.

/*document.write('<br/><br/> Задание №8.<br/><br/>');
let a8 = prompt('Введите количество рядов');
function treugolnik(){
	
for(let i=0; i < a8; i++){
    for(let j = 1; j < (a8-i); j++){
        document.write('&nbsp&nbsp');
    }
    for (let j = (a8 - 2*i); j <= a8; j++){
        document.write('*');
    }
document.write('<br/>');
}
}
function perevorot(){
	
for(let i=a8-1; i >= 0; i--){
    for(let j = 1; j < (a8-i); j++){
        document.write('&nbsp&nbsp');
    }
    for (let j = (a8 - 2*i); j <= a8; j++){
        document.write('*');
    }
document.write('<br/>');
}
}
treugolnik();
perevorot();
*/

//Задание №9 

document.write('<br/><br/> Задание №9.<br/><br/>');
function fibo(){
let arr9 = [0],
	one = 0,
	two = 1,
	sum9 = 0;

for (let i = 1; two <= 1000; i++) {
	arr9.push(two);
	sum9 = one + two;
	one = two;
	two = sum9;
}
for (let i = 0; i < arr9.length; i++){
	document.write(arr9[i]+ ' ');
}
}
fibo();

//Задание №10 

document.write('<br/><br/> Задание №10.<br/><br/>');

function z10 (n10){
	arr10 = n10.toString().split('');
	sum10 += +arr10[i];
	i++;
	if (sum10 <= 9) {document.write('Сумма цифр равна: ' +sum10)
	}
	if (sum10 > 9) {return z10(sum10)
	}
}
let i = 0,
	sum10 = 0;
z10(39);

//Задание №11 

document.write('<br/><br/> Задание №11.<br/><br/>');

function z11 (arr11){
	document.write(arr11[i]+ ' ');
	i++;
	if (i < arr11.length){return z11(arr11)
	}
}
i = 0;
z11([1,2,3,4,5,7,9]);

//Задание №12 (не получается добавить пробелы). Перед запуском раскоментировать

document.write('<br/><br/> Задание №12.<br/><br/>');

function linia (){
	document.write('*');
	i++;
	if (i <= lmax ) {linia ()
	}
}

function z12 (){
	a12 = prompt('Введите Фамилию Имя Отчество');
	b12 = prompt('Введите номер группы');
	str1 = '* Домашняя работа: "Функции"';
	str2 = '* Выполнил: студент гр. ' + b12;
	str3 = '* ' +a12;
	if ( (str1.length > str2.length) && (str1.length > str3.length) ){
		str1 += ' *'; 
		lmax = str1.length;
		for(let i=0; (lmax-2) > str2.length; i++){
			str2 += '0';
			if ((lmax-2) == str2.length) {
				str2 += ' *';
			}
		}
		for(let i=0; (lmax-2) > str3.length; i++){
			str3 += '0';
			if ((lmax-2) == str3.length) {
				str3 += ' *';
			}
		}
}else if ( (str2.length > str1.length) && (str2.length > str3.length) ){
	str2 += ' *'; 
	lmax = str2.length;
	for(let i=0; (lmax-2) > str1.length; i++){
			str1 += '0';
			if ((lmax-2) == str1.length) {
				str1 += ' *';
			}
		}
		for(let i=0; (lmax-2) > str3.length; i++){
			str3 += '0';
			if ((lmax-2) == str3.length) {
				str3 += ' *';
			}
		}
}else {
	str3 += ' *'; 
	lmax = str3.length;
	for(let i=0; (lmax-2) > str1.length; i++){
			str1 += '0';
			if ((lmax-2) == str1.length) {
				str1 += ' *';
			}
		}
		for(let i=0; (lmax-2) > str2.length; i++){
			str2 += '0';
			if ((lmax-2) == str2.length) {
				str2 += ' *';
			}
		}
}
i = 1;
linia ();
document.write('<br/>' +str1);
document.write('<br/>' +str2);
document.write('<br/>' +str3);
document.write('<br/>');
i = 1;
linia ();
}

//z12 ();