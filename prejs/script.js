console.log("Hello World!55555"); // выводиться модальное окно
// alert(10 - 5);

var num = 5;
var str = '"Привет"';
var bool = true;
var lie = false;

var _lastname;
var $patronymic;

var arr = [];
var obj = {
  a: 5,
  b: "JavaScript",
  c: false,
  d: {
    e: 10,
    f: 15,
  },
  z: [1, 2, 3, 4],
};

obj.new = "Girl";

// console.log(typeof obj);
// console.log(obj);
// console.log(10 % 3); // остаток от деления на 3
num;
console.log("num: ", num);
num++;
console.log(num);
str2 = " sdfkjdslf";
// console.log(str + str2); // конкотенация +

// console.log("100" + "200");
// console.log(+"100" + +"200");

// console.log(!bool); // ! не
// console.log(5 === 5);
// console.log(5 == "5"); // не строгое равенство
// console.log(5 === "5"); // строгое сравнение
// console.log(4 !== "5"); // строгое не равно
// console.log(4 != "4"); // не равно
var a = 2;

a += 4;

// console.log(a);

var rain = false;
var hot = {
  value: true,
};

hot.value = true;

if (rain) {
  console.log("Дождь");
} else if (hot.value) {
  console.log("Нет дождя");
} else {
  console.log("Возьми собаку");
}

console.log();

var arr = ["a", "b", "c", "d"];

console.log(arr.length);

for (var i = 0; i < 4; i++) {
  console.log(arr[i]);
}

function printConsole(key) {
  console.log(key);
}

printConsole("sdlkfjlsdfj");
printConsole("Привет");
printConsole("sdflkjsdlf");
