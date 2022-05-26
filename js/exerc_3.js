// Место для первой задачи
// function firstTask() 
//     let num = 5;
//     while (num<11) {
//         console.log(num);
//         num++;   
// }

// // Место для второй задачи
// function secondTask() {
//     for ( let i=20; i>10; i--){
//         if (i===13){
//             break;
//         }
//     console.log(i)
//     }       
// }

// // Место для третьей задачи
// function thirdTask() {
//     for (let i=2; i<=10; i++){
//         if (i%2 != 0){
//             continue;
//         }
//         else{
//             console.log(i);
//         }
//     }    
// }

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i=2;
// do{
//     i++;      
//     if (i % 2 === 0) {
//         continue;
//     } 
//     console.log(i);
// }
//     while (i<16);



// function fourthTask() {
//     // Пишем решение вот тут
    
    
// }

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i<=10; i++){
//         arrayOfNumbers[i - 5] = i;
//     }
    
//     console.log(arrayOfNumbers);
//     // Не трогаем
//     return arrayOfNumbers;
// }

// Место для первой задачи
// function calculateVolumeAndArea(a) {
//     if (Number.isInteger(a) && a>0) {
//         let volume = 0;
//             area = 0;
//             volume = a*a*a;
//             area = 6*a*a;
//         return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
//     } else {
//         return ("При вычислении произошла ошибка");
//     }
// }
// calculateVolumeAndArea(5);


// // Место для второй задачи
// function getCoupeNumber(x) {
  
//     if ( typeof(x) !== 'number' || !Number.isInteger(x) || x<0 ) {
//         return ("Ошибка. Проверьте правильность введенного номера места");

//    }if (x === 0 || x > 36) {
//         return "Таких мест в вагоне не существует";

//     }else { 
//        let coupeNumber = Math.ceil(x/4);
//        return coupeNumber;
//    }
// }
// getCoupeNumber();


// // Упражнение 8.
// // Место для первой задачи
// function getTimeFromMinutes(x) {

//     if ( typeof(x) !== 'number' || !Number.isInteger(x) || x<0 ) {
//         console.log ("Ошибка, проверьте данные");

//     } else {
//         let hour = Math.floor(x/60);
//             minutes = x % 60 ;

//     let str = '';

//     switch (hour) {
        
//         case 1:
//         str = 'час';
//         break;

//         case 2:
//         case 3:
//         case 4:
//         str = 'часа';
//         break;

//         default:
//         str = 'часов';
//     }
        
//     return `Это ${hour} ${str} и ${minutes} минут`;

//     }

// }
// getTimeFromMinutes();


// function getTimeFromMinutes(x) {

//     if ( typeof(x) !== 'number' || !Number.isInteger(x) || x<0 ) {
//         console.log ("Ошибка, проверьте данные");

//     } else {
//         let hours = Math.floor(x/60);
//             minutes = x % 60 ;

//     let hoursStr = '';

//     switch (hours) {
        
//         case 1:
//         hoursStr = 'час';
//         break;

//         case 2:
//         case 3:
//         case 4:
//         hoursStr = 'часа';
//         break;

//         default:
//         hoursStr = 'часов';
//     }

//     let minutesStr = '';

//     switch (minutes) {
        
//         case 1:
//         minutesStr = 'минута';
//         break;

//         case 2:
//         case 3:
//         case 4:
//         minutesStr = 'минуты';
//         break;

//         default:
//         minutesStr = 'минут';
//     }
        
//     console.log (`Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`);

//     }

// }
// getTimeFromMinutes(82);

// // Место для второй задачи
// function findMaxNumber (num1, num2, num3, num4) {

//     if ( typeof(num1 && num2 && num3 && num4) !== 'number' ) {
//         console.log (0);

//     } else {

//     console.log (Math.max(num1, num2, num3, num4));

//     }
// }
// findMaxNumber (1, 5, 6.6, '1');


// // Упражнение 4.
// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//      for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }     
//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if ( typeof(data[i]) !== 'number' ) {
//             data[i] = `${data[i]} - done`;
//         } else {
//             data[i] = data[i]*2;
//         }
//     }
//             console.log(data);
            
//     // Не трогаем
//     return data;
// }

// secondTask();


// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }

//     console.log(result);
//     // Не трогаем
//     return result;
// }

// thirdTask();

// //Упражнение 5
// //Пишем решение вот тут

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i ++) {

//     for (let k = 0; k < lines-i; k++) {
//         result += ' ';
//     }
    
//     for (let j = 0; j < 2*i+1; j++) {
//         result += '*';

//     }
//         result += '\n';
// }

// console.log (result);


// //Упражнение 10

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {

//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);


// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);


// //Упражнение 11

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
    
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });
    
//     return str;
// }

// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     let str = '';

//     arr.forEach (function(city) {
//         console.log (city.toLowerCase())
//     });        
// }

// standardizeStrings(favoriteCities);


// //Упражнение 12/

// const someString = 'This is some strange string';

// function reverse(str) {
    
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }

//     let result = str.split('');
//     return (result.reverse().join(''));
        
// }
// reverse(someString);   

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     console.log(str);
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

// Упражнение 13

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;

    data.shops.forEach(shops => {
        square += shops.width * shops.length;
    });

    let volume = data.height * square;

    if (data.budget > volume * data.moneyPer1m3) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);


// Упражнение 14

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);