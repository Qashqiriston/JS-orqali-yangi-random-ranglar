// const myNumber = +prompt("raqam kiriting");

// const arrowF =  (value) => {
//   if (value =>  0) {
//     alert((value *= 3));
//   }else{
//     alert((value /= 2))
//   }
// };
// arrowF(myNumber);
// n sonni + bolsa 3ga kupaytiradigan -bulsa 2 ga buladigan dastur


// const myNumber = +prompt ("ulcham kiriting")
// const currentM = 100;
// const currentDM = 10;

// const arrowF = (value) =>{
//   const hisobla = alert(`${value / currentM}m , ${value / currentDM}dm `)
//   return hisobla;
// };
// arrowF(myNumber)
// metrni topish formulasi

// const myWith = +prompt('vaznni kiriting')
// const myTonna = 1000;
// const mySenter = 100;
 
// const arrowF = (value) => {
//   const hisobla = alert(`${value / myTonna}t , ${value / mySenter}snt`)
//   return hisobla
// };
// arrowF(myWith);
// kilosidan tonnaga aylantirish

// function fact(n) {
//   if (n == 1 || n==0){
//     return 1
//   }
//   return n*fact(n-1)
// }

// function sumFact(n){
//   let summ = 0
//   for(let i=1; i<=n; i++){
//     summ += fact(i)
//   }
//   console.log (summ)
// }
// sumFact(6)

// let myNUM = +prompt("son kiriting");
// if (a > 0){
//   alert(`${myNUM} bu musbat`)
// }else if (a === 0){
//   alert(`${myNUM}nulga teng`)
// }else {
//   alert(`${myNUM} manfiy raqam`)
// }
// <-------------------------------------------->
// const bill = function (narx , soliqlar){
//   let total = 0
// for (let i = 0; i < narx.length; i++){
//   total += narx[i] + narx[i] * soliqlar 
// }
// return total
// }

const bill = (narx , soliqlar) => {let total = 0 
for(let i = 0; i < narx.length; i++){
  total += narx[i] + narx[i] * soliqlar
}
return total
}

const umumiy = bill([123, 23 ,34], 0.2 )
console.log(umumiy)
// maxsulotni 20% soliqini topadigan formulla

// <----------------------------------------------->

function age (age, name){
  let hisob = 2023 - age
  console.log(`${name} siz ${age} yoshga kirdiz`)
  return age
}
const hisob = age(2004, "akobir")

// <----------------------------------------------------->

const c = 15;
const d = 2;
let natija = c + d;
console.log(natija)

// <--------------------------------------------------------->

// const valur = 5;
// let ker = valur ** valur;
// alert (ker)

// <------------------------------------------------------->

// let key = ["red, blue, white, green"]

// for(let i = 0; i < key; i++){
//   Math.random((key))
// }
// console.log(key)

// function colorCange(){
//   let i = '#'
//   for (let i = 0; i < 6; i++){
//     const randomColor = Math.floor(Math.random() * values.length);
//     color += values[randomColor];
//   }
//   return color;
// }

// btn.addEventListener('click',()=>{
//   let color1 = colorBg();
//   colorPar.style.backgroundColor = color1;
// });


const createColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
const btn = document.querySelector('.btn')
const elBox = document.querySelector('.box')
let color = '#'

function colorFnc() {
    for(let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * createColor.length)
        color += createColor[num]
    }
    elBox.style.backgroundColor = color
    elBox.textContent = color
    color = '#'
    return 0
}

btn.addEventListener('click', colorFnc)