// Задание №1

document.write('<br/>Задание №1<br/><br/>');

let i = 1;
    
while(i<=50) {
    document.write(i, " ");
    i++;
}

document.write('<br/><br/>');
i = 35;

while(i>=8) {
    document.write(i, " ");
    i--;
}

// Задание №2

document.write('<br/><br/>Задание №2<br/>');

i = 89;
    
while(i>=11) {
    document.write('<br/>', i);
    i--;
}

// Задание №3

document.write('<br/><br/>Задание №3<br/>');

let sum = 0;
i=0;

while(i<=100) {
    sum += i;
    i++;
}
document.write(sum);  

// Задание №4 

document.write('<br/><br/>Задание №4<br/>');

let a = 5;



for (let i = 1; i <= a; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++)
        {
            sum += j;
        }     
    document.write('Сумма ' + i + '=' + sum,  " ") ; 
}


// Задание №5

document.write('<br/><br/>Задание №5<br/>');
// while
 i = 8;
while(i<=56) {
    if (i % 2 == 0) {
        document.write(i, " ");
    }
    i++;
}
document.write('<br/>');

//for
for (let i = 8; i <= 56; i++) {
    if(i % 2 == 0) {
        document.write(i, " "); 
    }
}




// Задание №6

document.write('<br/><br/>Задание №6<br/>');

let proizv = Number;

for(let i = 2; i <=10 ; i++){
    if (i == 2) {   
        for(j = 2; j <= 10; j++){
            proizv = i*j;
            console.log(i +'*'+ j + '=', proizv);
            document.write(i +'*'+ j + ' = ' +proizv+ '<br/');//не работает
        }
    }
    else {
        for(j = 1; j <= 10; j++){
            proizv = i*j;
            console.log(i +'*'+ j + '=', proizv);
            document.write(i +'*'+ j + ' = ' +proizv+ '<br/');//не работает
        }
    }
}

// Задание №7

document.write('<br/><br/>Задание №7<br/>');

let n = 1000;
    sum = 0;
    while (n > 50){
        n = n / 2;
        sum++;
    }
document.write('n = ' + n + ', количество циклов = ' + sum + '<br /\>');


// Задание №8 перед проверкой раскоментировать.

/*document.write('<br/><br/>Задание №8<br/>');

let b = prompt('Введите любое число. Для прекращения ввода введите 0 или пустую строку.'),
    sum1 = 0,
    srednAr = 0;
b = Number(b);
i=0;
    while ( (b != 0) && !(isNaN(b)) )  {
          
            sum1 = sum1 + b;
            i++
            srednAr = sum1/i;
            b = prompt('Введите любое число. Для прекращения ввода введите 0 или пустую строку.');
            b = Number(b);
    }
    if ((b == 0) || (isNaN(b))) {
        alert('Ввод окончен, результаты: \n Сумма введённых чисел '  + sum1 + '\n Среднее арифметическое введённых чисел ' + srednAr);
        }
*/

 
// Задание №9 поиск максимального и минимального значения в строке

document.write('<br/><br/>Задание №9<br/>');

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    arr = str.split(' '),
    max = arr[0],
    min = arr[0];
console.log(arr); // проверка правильности

// максимальное
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]){
        max = arr[i]
    }
}
console.log(max);

// минимальное 
for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]){
        min = arr[i]
    }
}
console.log(min);

document.write('<br/>Самое большое число в строке ' +max+', а самое маленькое число ' +min+'.<br/>');

// Задание №10 подсчёт кол-ва цифр в числе, суммы цифр в числе и переворот цифр в числе. перед проверкой раскоментировать

/*document.write('<br/><br/>Задание №10<br/>');

let n1 = prompt('Введите целое число'),
    arr1 = n1.split(''),
    arr0 = [],
    sum1 = 0,
    col = 0;

// подсчёт кол-ва цифр
col = arr1.length;
console.log(col); //проверка в консоли

// сумма цифр
for(let i = 0; i < col; i++){
    sum1 += +arr1[i];
}
console.log(sum1);//проверка в консоли

//переворот цифр в числе
for(let  i = 0; i < col; i++) {
    arr0[i] = arr1[(col-1) - i];
}
console.log(arr0.join(''));//проверка в консоли

document.write('<br/>Вводится число ' +n1+ '; количество цифр в числе = ' +col+ '; сумма цифр в числе = ' +sum1+ '; обратный порядок ' +arr0.join('')+ '.<br/>');
*/