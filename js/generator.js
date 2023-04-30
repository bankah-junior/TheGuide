var inputPeriod1 = document.querySelector('#inputPeriod-1');
var inputPeriod2 = document.querySelector('#inputPeriod-2');
var inputPeriod3 = document.querySelector('#inputPeriod-3');
var inputPeriod4 = document.querySelector('#inputPeriod-4');
var inputSubject1 = document.querySelector('#inputSubject-1');
var inputSubject2 = document.querySelector('#inputSubject-2');
var inputSubject3 = document.querySelector('#inputSubject-3');
var inputSubject4 = document.querySelector('#inputSubject-4');
var inputSubject5 = document.querySelector('#inputSubject-5');
var inputSubject6 = document.querySelector('#inputSubject-6');
var inputSubject7 = document.querySelector('#inputSubject-7');
var inputSubject8 = document.querySelector('#inputSubject-8');
const sendBtn = document.querySelector('#sendBtn');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');
const s5 = document.querySelector('#s5');
const s6 = document.querySelector('#s6');
const s7 = document.querySelector('#s7');
const s8 = document.querySelector('#s8');
const s9 = document.querySelector('#s9');
const s10 = document.querySelector('#s10');
const s11 = document.querySelector('#s11');
const s12 = document.querySelector('#s12');
const s13 = document.querySelector('#s13');
const s14 = document.querySelector('#s14');
const s15 = document.querySelector('#s15');
const s16 = document.querySelector('#s16');
const s17 = document.querySelector('#s17');
const s18 = document.querySelector('#s18');
const s19 = document.querySelector('#s19');
const s20 = document.querySelector('#s20');


sendBtn.addEventListener('click', () => {
    var randomNumber1 = Math.floor(Math.random() * 8);
    var randomNumber2 = Math.floor(Math.random() * 8);
    var randomNumber3 = Math.floor(Math.random() * 8);
    var randomNumber4 = Math.floor(Math.random() * 8);
    var randomNumber5 = Math.floor(Math.random() * 8);
    var randomNumber6 = Math.floor(Math.random() * 8);
    var randomNumber7 = Math.floor(Math.random() * 8);
    var randomNumber8 = Math.floor(Math.random() * 8);
    var randomNumber9 = Math.floor(Math.random() * 8);
    var randomNumber10 = Math.floor(Math.random() * 8);
    var randomNumber11 = Math.floor(Math.random() * 8);
    var randomNumber12 = Math.floor(Math.random() * 8);
    var randomNumber13 = Math.floor(Math.random() * 8);
    var randomNumber14 = Math.floor(Math.random() * 8);
    var randomNumber15 = Math.floor(Math.random() * 8);
    var randomNumber16 = Math.floor(Math.random() * 8);
    var randomNumber17 = Math.floor(Math.random() * 8);
    var randomNumber18 = Math.floor(Math.random() * 8);
    var randomNumber19 = Math.floor(Math.random() * 8);
    var randomNumber20 = Math.floor(Math.random() * 8);

    var subjects = [
        inputSubject1.value.toUpperCase(),
        inputSubject2.value.toUpperCase(),
        inputSubject3.value.toUpperCase(),
        inputSubject4.value.toUpperCase(),
        inputSubject5.value.toUpperCase(),
        inputSubject6.value.toUpperCase(),
        inputSubject7.value.toUpperCase(),
        inputSubject8.value.toUpperCase()
    ];

    p1.innerHTML = inputPeriod1.value.toUpperCase();
    p2.innerHTML = inputPeriod2.value.toUpperCase();
    p3.innerHTML = inputPeriod3.value.toUpperCase();
    p4.innerHTML = inputPeriod4.value.toUpperCase();

    s1.innerHTML = subjects[randomNumber1];
    s2.innerHTML = subjects[randomNumber2];
    s3.innerHTML = subjects[randomNumber3];
    s4.innerHTML = subjects[randomNumber4];
    s5.innerHTML = subjects[randomNumber5];
    s6.innerHTML = subjects[randomNumber6];
    s7.innerHTML = subjects[randomNumber7];
    s8.innerHTML = subjects[randomNumber8];
    s9.innerHTML = subjects[randomNumber9];
    s10.innerHTML = subjects[randomNumber10];
    s11.innerHTML = subjects[randomNumber11];
    s12.innerHTML = subjects[randomNumber12];
    s13.innerHTML = subjects[randomNumber13];
    s14.innerHTML = subjects[randomNumber14];
    s15.innerHTML = subjects[randomNumber15];
    s16.innerHTML = subjects[randomNumber16];
    s17.innerHTML = subjects[randomNumber17];
    s18.innerHTML = subjects[randomNumber18];
    s19.innerHTML = subjects[randomNumber19];
    s20.innerHTML = subjects[randomNumber20];

    var tMessage = document.querySelector('#tMessage');
    var pptResult = document.querySelector('#pptResult');

    if (inputPeriod1.value == '' || inputPeriod2.value == '' || inputPeriod3.value == '' || inputPeriod4.value == '') {
        alert('Fields are required!');
        tMessage.classList.add('hidden');
        pptResult.classList.add('hidden');
    } else {
        tMessage.classList.remove('hidden');
        pptResult.classList.remove('hidden');
        sendBtn.innerHTML = 'Re-Generate';
    };
});



