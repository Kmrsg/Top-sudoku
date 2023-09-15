function read() {
  const { EOL } = require('os');
  const fs = require('fs');
  const path = require('path');
  const dirName = __dirname;
  const dirPath = path.join(`${dirName}/puzzles.txt`);
  const txt = fs.readFileSync(dirPath, 'utf-8');
  return txt
    .trim()
    .split(EOL)
    .map((el) => Array.from(el));

  //  * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
  //  */
}
const puzzles = read();
console.log(puzzles);
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
