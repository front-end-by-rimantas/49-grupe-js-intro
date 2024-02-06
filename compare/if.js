/*
IF - reiksmiu palyginimas

SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ...
if () {} ... else if () {} ... else {}

PALYGINIMO OPERATORIAI:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

*/

const profesija = 'Barmenas';
const amzius = 18;
const amziausLimitas = 21;

console.log('START');

if (amzius >= amziausLimitas) {
    console.log('Ko noresi? 😏');
} else {
    console.log('Sorry...');
}

let msg = profesija + ' ieina i bara...';
console.log(msg);

if (amzius >= amziausLimitas) {
    msg = 'Tai ko noresi uzsisakyti? 😏';
} else {
    msg = profesija + '... Tu gi vis vien neturi pinigu... 😎';
}

console.log(msg);

console.log('END');

console.clear();

const win = 'xp';

let msgWin = 'Tu neturi windowsu??? 👀👀👀';

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
} else if (win === 'xp') {
    msgWin = 'Windows XP';
} else if (win === 'vista') {
    msgWin = 'Windows Vista';
} else if (win === '10') {
    msgWin = 'Windows 10';
} else {
    msgWin = 'Neatpazinta OS...';
}

console.log(msgWin);

console.clear();

if ('4' == 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

if ('4' === 4) {
    console.log('TAIP');
} else {
    console.log('NE');
}

const saskaita = 100;
const isimti = 50;

let msgAB = 'Inicijuojame bankine operacija...';

if (saskaita >= isimti) {
    msgAB = 'Stai tavo ' + isimti + ' pinigai';
} else {
    msgAB = 'Tu tiek neturi, kiek nori issiimti...';
}

console.log(msgAB);

if ('4' === 2) {
    console.log('taip');
} else {
    console.log('ne');
}