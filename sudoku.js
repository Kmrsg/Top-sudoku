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
  const subArray = [];
  for (let i = 0; i < txt.length / 9; i += 1) {
    subArray[i] = txt.slice(i * 9, i * 9 + 9);
  }
  return subArray;

  //  * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
  //  */
}

function solve() {
  const puzzle = read();

  for (let r = 0; r < 9; r += 1) {
    for (let c = 0; c < 9; c += 1) {
      if (puzzle[r][c] === '-') {
        for (let i = 1; i < 10; i += 1) {
          let valid = true;
          let random = Math.floor(Math.random() * 9) + 1;
          for (let j = 0; j < 9; j += 1) {
            if (puzzle[j][c] == random || puzzle[r][j] == random) {
              valid = false;
            }
          }

          if (valid) {
            puzzle[r][c] = random.toString();
          }
        }
      }
    }
  }
  return puzzle;
}
console.table(solve());

function isSolved(arr) {
  let some = false;
  arr.forEach((el) => {
    if (el.includes('-')) some = true;
  });

  if (some) {
    solve();
  } else {
    return arr;
  }
}

function prettyBoard() {
  // for (let i = 0; i < puzzles.length; i++) {}
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
