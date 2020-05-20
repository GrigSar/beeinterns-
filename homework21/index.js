// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
    'one': 'number',
};


function resolve1(inputObject) {
    let rule = {};
    let keys = Object.keys(inputObject);
    keys.forEach(function (key) {
        let val = inputObject[key];
        rule[val] = key;
    });
    return rule;
}

function resolveTask1Example2(inputObject) {
    let obj = {};
    for (let i in inputObject) {
        obj[inputObject[i]] = i
    }
    return obj;
}

const result1 = resolve1(firstObject);
const example2 = resolveTask1Example2(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(example2); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
    'apple': 'fruit',
    'potato': 'vegetable',
    'strawberry': 'berry',
};

function resolve2(inputObject) {
    let obj = {};
    for (let i in inputObject) {
        obj[inputObject[i]] = i
    }
    return obj;
}

const result2 = resolve2(secondObject);
console.log(result2);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }

console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

function centuryFromYear(year) {
    if (year > 0){
        if (0 < year && year <= 100){
            return 1;
        }else if (year % 100 !== 0){
            return  Math.round(year/100) + 1;
        }else return  year/100;
    }else return false;
}
const year = 1905;
console.log(centuryFromYear(year)); // 20

const year2 = 1700;
console.log(centuryFromYear(year2)); // 17.
