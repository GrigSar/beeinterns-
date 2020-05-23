// Задание 1

let i = 10;

for (i; i <= 50; i+=10) {
  console.log(i);
}
// Ожидаемый результат: 10 20 30 40 50

// Задание 2
/*
 Написать функцию-конструктор Men с ДВУМЯ аргументами
  С помощью которой можно создать объект
  { profession: 'hero', name: 'Кларк', secondName: 'Кент' }
*/
class Men {
  constructor(name, secondName) {
    let obj = {
      profession:'hero',
      name:name,
      secondName:secondName
    };
    return obj;
  }
}
const superman = new Men('Кларк', 'Кент');
console.log('superman: ', superman);
// Men { profession: 'hero', name: 'Кларк', secondName: 'Кент' }


// Задание 3
// Напишите функцию sum, которая работает так: sum(a)(b) возвращает a + b.
function sum(a) {
  return  function f(b) {
    return a + b;
  };
}
console.log(sum(1)(2));  // 3
console.log(sum(5)(-1));  // 4




// Задание 4
// Измените код так, чтобы console.log выводил последовательно символы 'П т и ц а'
const bird = ['П', 'т', 'и', 'ц', 'а'];

for (let index = 0; index < bird.length; index++) {
  setTimeout(()=> {
    console.log(bird[index]);
  }, 100);
}
