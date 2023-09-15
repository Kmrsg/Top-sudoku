function read() {
  const { EOL } = require('os');
  const fs = require('fs');
  const some = process.argv;
  const path = require('path');
  const dirName = __dirname;
  const dirPath = path.join(`${dirName}/puzzles.txt`);
  let txt = fs.readFileSync(dirPath, 'utf-8');

  txt = txt
    .trim()
    .split(EOL)
    .map((el) => Array.from(el))[some[2]];
  let subArray = [];
  for (let i = 0; i < txt.length / 9; i += 1) {
    subArray[i] = txt.slice(i * 9, i * 9 + 9);
  }
  return subArray;

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
  for (let i = 0; i < puzzles.length; i++) {}

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
