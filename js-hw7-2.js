//** Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)
// Повинен знаходити: Wonderful, Joyful
// Не повинен знаходити: Happiness, Time, Task, Apple */

arr = ['Wonderful', 'Joyful', 'Happiness', 'Time', 'Task', 'Apple'];

function getMatches(words) {
  let matches = [];
  const regex = /^[^aA]{6,}$/;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (regex.test(word)) {
      matches.push(word);
    }
  }
  return matches;
}

// Output to console
console.log(getMatches(arr));
