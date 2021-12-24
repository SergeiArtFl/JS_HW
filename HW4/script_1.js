// Задание №1

document.write('<br/> Задание №1. Вывод элементов массива на экран. <br/><br/>')

let arr1 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr1.length; i++) {
    document.write(arr1[i]+ ' ');
}

// Задание №2

document.write('<br/><br/> Задание №2.<br/><br/>')

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for(let i = 0; i < arr2.length; i++) {
    if( (arr2[i] > -10) && (arr2[i] < -3) ){
        document.write(arr2[i]+ ' ');
    }
}

// Задание №3

document.write('<br/><br/> Задание №3.<br/><br/>')

let arrFor = [],
    result = 0,
    arrWhile = [];

// for
    for(let i = 23; i <= 57; i++) {
        arrFor.push(i); 
    }
    for(let i = 0; i < arrFor.length; i++) {
        document.write(arrFor[i]+ ' ');
        result += +arrFor[i];
    }
    document.write('<br/><br/>Сумма элементов равна: ' +result+ '<br/><br/>')
//while
let i = 23;
while(i <= 57) {
    arrWhile.push(i); 
    i++;
}
i = 0;
while(i < arrWhile.length) {
    document.write(arrWhile[i]+ ' ');
    i++;
}

// Задание №4

document.write('<br/><br/> Задание №4.<br/><br/>');

let arr4 = ['10', '20', '30', '50', '235', '3000'],
    a = [];
    
    for (let i = 0; i < arr4.length; i++){
        a = arr4[i];
        if ( (a[0] === '1') || (a[0] === '2') || (a[0] === '5') ){
            document.write(arr4[i]+' ');
        }
    }

// Задание №5

document.write('<br/><br/> Задание №5.<br/><br/>');

let arr5 = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

for (let i = 0; i < arr5.length; i++){
    if ( (arr5[i] !== 'СБ') && (arr5[i] !== 'ВС') ){
        document.write(arr5[i] + ' ');}
    else{
        document.write('<b>' + arr5[i] + '<b>', ' ' );
     }
}

// Задание №6

document.write('<br/><br/> Задание №6.<br/><br/>');

let arr6 = [2018, 2019, 2020, 2021];
arr6.push(2022);
document.write(arr6[arr6.length - 1]);

// Задание №7
/* перед запуском - раскоментировать
document.write('<br/><br/> Задание №7.<br/><br/>');

let arr7 = [],
    a7 = prompt('Введите числа для создания массива. Для завершения ввода введите пустое значение.');
for(let i = 0; a7 != ' '; i++) {
        arr7.push(a7);
        a7 = prompt('Введите числа для создания массива. Для завершения ввода введите пустое значение.');
        if (a7 == ' '){
            alert('Ввод окончен');  
        }
    }
    document.write('Введенный массив: ');
    for(let i = 0; i < arr7.length; i++){
        document.write(arr7[i]+ ' ')
        }

    arr7.sort(function(a, b){
        return a - b;
    });
    document.write('<br/><br/> Отсортированный массив: ');
    for(let i = 0; i < arr7.length; i++){
        document.write(arr7[i]+ ' ')
        }      
*/

// Задание №8 Переворот массива while и reverce

document.write('<br/><br/> Задание №8.<br/><br/>');

let arr8 = [12, false, 'Текст', 4, 2, -5, 0],
    arr81 = [];   
i = arr8.length - 1;
while( i >= 0) {
    arr81.push(arr8[i]);
    i--;
}
document.write('При помощи while '+arr81+ '<br/><br/>' );

document.write('При помощи reverse ' +arr8.reverse());

// Задание №9 Подсчёт пустых элементов массива

document.write('<br/><br/> Задание №9.<br/><br/>');


let arr9 = [5,9,21,,,9,78,,,,6],
    sum9 = 0;

i=0;

while (i < arr9.length) {
    if ( arr9[i] === undefined){
        sum9 += 1;
    }
    i++
}
document.write('Количество пустых элементов массива: ' +sum9);

// Задание №10 перед испльзование - раскоментировать.

/*document.write('<br/><br/> Задание №10.<br/><br/>');

let arr10 = [],
    a10 = prompt('Введите числа для создания массива, обязательно введите 0 не менее двух раз. Для завершения ввода введите пустое значение.');
for(let i = 0; a10 != ' '; i++) {
        arr10.push(a10);
        a10 = prompt('Введите числа для создания массива, обязательно введите 0 не менее двух раз. Для завершения ввода введите пустое значение.');
        if (a10 == ' '){
            alert('Ввод окончен');  
        }
    }
let firstElement= arr10.indexOf('0'),
    lastElement = arr10.lastIndexOf('0'),
    sum10 = 0;

if (lastElement !== -1 && firstElement !== -1) {
    for (let i = (firstElement + 1); i < lastElement; i++) {
        sum10 += +arr10[i];
    }
    document.write('Сумма элементов между нулями: ' +sum10);
} else {
    document.write('0');
}
*/

// Задание №11 перед испльзование - раскоментировать.

/*document.write('<br/><br/> Задание №11.<br/><br/>');
let a11 = prompt('Введите высоту(количество строк) треугольника');

for(let i=0; i < a11; i++){
    for(let j = 1; j < (a11-i); j++){
        document.write('&nbsp&nbsp');
    }
    for (let j = (a11 - 2*i); j <= a11; j++){
        document.write('^');
    }
document.write('<br/>');
}*/