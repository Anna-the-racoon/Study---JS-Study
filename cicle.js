let inputNumber;

do {
  inputNumber = prompt("Угадайте тайное число");
  inputNumber == 555 ? alert("У Вас получилось! Превосходно!") : alert("Попробуйте ещё раз");
} while (inputNumber != 555);
