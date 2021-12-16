// Задание №1
let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Ваш город проживания?'),
    phone = prompt('Ваш телефон?', +375),
    email = prompt('Ваш E-mail?'),
    company = prompt('Место работы?');

document.write(`Задание №1<br/><br/>Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

// Задание №2

let old = 2021-age;

document.write(`<br/><br/>Задание №2<br/><br/> ${name} родился в ${old} году.`);

// Задание №3

document.write('<br/><br/>Задание №3<br/><br/>');

let str = prompt('Введите шестизначное число'),
    a1 = Math.floor((str/100000)%10),
    a2 = Math.floor((str/10000)%10),
    a3 = Math.floor((str/1000)%10),
    a4 = Math.floor((str/100)%10),
    a5 = Math.floor((str/10)%10),
    a6 = Math.floor((str/1)%10),
    a7 = Math.floor(str/1000000);

if ((a7!=0)||(a1==0)) {alert('Неверное значение! Попробуйте еще раз.'); document.write('Неверное значение! Попробуйте еще раз.');}
else if (a1+a2+a3 == a4+a5+a6) {document.write('Да');}
else {document.write('Нет');}

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);

// Задание №4

let a = prompt('Введите число');
if (a>0) {alert("Верно"); document.write(`<br/><br/>Задание №4<br/><br/>Верно.`);}
else {alert('Неверно'); document.write(`<br/><br/>Задание №4<br/><br/>Неверно.`);}

// Задание №5

a=10;
let b=2,
    sum=a+b,
    vich=a-b,
    proiz=a*b,
    chus=a/b;

document.write(`<br/><br/>Задание №5<br/><br/> Сумма:${sum}<br/>Разность:${vich}:<br/>Произведение:${proiz}:<br/>Частное:${chus}<br/>`);
if (sum>1) {document.write(`Квадрат суммы: ${Math.pow(sum, 2)}`)}

// Задание №6

a = prompt('Введите число a');
b = prompt('Введите число b');
if (((a>2)&&(a<11))||((b>=6)&&(b<11))) {alert('Верно'); document.write(`<br/><br/>Задание №6<br/><br/>Верно.`);}
else {alert('Неверно'); document.write(`<br/><br/>Задание №6<br/><br/>Неверно.`);}

// Задание №7

document.write('<br/><br/>Задание №7<br/><br/>');

let n = prompt('Введите число от 0 до 59');
if (n<0) {alert('Неверное значение.'); document.write('Неверное значение.')}
else {
switch (Math.trunc(n/15)) {
    case 0: document.write('Первая четверть.');
    break;
    case 1: document.write('Вторая четверть.');
    break;
    case 2: document.write('Третья четверть.');
    break;
    case 3: document.write('Четвертая четверть.');
    break;
    default: alert('Неверное значение.'), document.write('Неверное значение.');
}
}

// Задание №8

document.write('<br/><br/>Задание №8<br/><br/>');

let day = prompt('Введите число от 1 до 31'),
    dayd = day/10;

if ((day<=0)||(day>31)) {alert('Неверное значение.'); document.write('Неверное значение.');}
else if (dayd<=1) {document.write('Первая декада.');}
else if (dayd<=2) {document.write('Вторая декада.');}
else if (dayd>2) {document.write('Третья декада.');}

// Задание №9

document.write('<br/><br/>Задание №9<br/><br/>');

let nday = prompt('Введите количество дней'),
    year = nday/365,
    month = nday/31,
    week = nday/7,
    hour = nday*24,
    minut = hour*60,
    second = minut*60;

if (year^0) {month=year*12}
if (nday<=0){alert('Неверное значение.'); document.write('Неверное значение.');}
else if ((year<1)&&(month<1)&&(week<1)) {document.write(`Меньше недели.<br/>Количество часов:${hour}.<br/>Количество минут:${minut}.<br/>Количество секунд:${second}.`);}
else if ((year<1)&&(month<1)&&(week>=1)) {document.write(`Меньше месяца.<br/>Количество недель:${week}.<br/>Количество часов:${hour}.<br/>Количество минут:${minut}.<br/>Количество секунд:${second}.`);}
else if ((year<1)&&(month>=1)&&(week>=1)) {document.write(`Меньше года.<br/>Количество месяцев:${month}.<br/>Количество недель:${week}.<br/>Количество часов:${hour}.<br/>Количество минут:${minut}.<br/>Количество секунд:${second}.`);}
else {document.write(`Количество лет:${year}.<br/>Количество месяцев:${month}.<br/>Количество недель:${week}.<br/>Количество часов:${hour}.<br/>Количество минут:${minut}.<br/>Количество секунд:${second}.`);}

// Задание №10

document.write('<br/><br/>Задание №10<br/><br/>');
day = prompt('Введите день в году от 1 до 365');
let monthn = Number;
if ((day<=0)||(day>365)) {alert('Неверное значение.'); document.write('Неверное значение.')}
else if (day<=31) {monthn=1; document.write('Месяц №1');}
else if ((day>31)&&(day<=59)) {monthn=2; document.write('Месяц №2');}
else if ((day>59)&&(day<=90)) {monthn=3; document.write('Месяц №3');}
else if ((day>90)&&(day<=120)) {monthn=4; document.write('Месяц №4');}
else if ((day>120)&&(day<=151)) {monthn=5; document.write('Месяц №5');}
else if ((day>151)&&(day<=181)) {monthn=6; document.write('Месяц №6');}
else if ((day>181)&&(day<=222)) {monthn=7; document.write('Месяц №7');}
else if ((day>222)&&(day<=253)) {monthn=8; document.write('Месяц №8');}
else if ((day>253)&&(day<=283)) {monthn=9; document.write('Месяц №9');}
else if ((day>283)&&(day<=304)) {monthn=10; document.write('Месяц №10');}
else if ((day>304)&&(day<=334)) {monthn=11; document.write('Месяц №11');}
else {monthn=12; document.write('Месяц №12');}

switch (monthn) {
    case 3:
    case 4:
    case 5:
        document.write('-Весна');
    break;
    case 6:
    case 7:
    case 8:
        document.write('-Лето');
    break;
    case 9:
    case 10:
    case 11:
        document.write('-Осень');
    break;
    case 12:
    case 1:
    case 2:
        document.write('-Зима');
    break;
}