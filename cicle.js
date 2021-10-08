let inputNumber;

do {
  inputNumber = prompt("Угадайте тайное число");
  inputNumber == 555 ? alert("У Вас получилось! Превосходно!") : alert("Попробуйте ещё раз");
} while (inputNumber != 555);

let minNumber = prompt("введите минимальное число для вывода на экран");
let maxNumber = prompt("введите максимальное число для вывода на экран");

for (var i = minNumber; i < maxNumber; i++) {
alert(`${i}`);
}
