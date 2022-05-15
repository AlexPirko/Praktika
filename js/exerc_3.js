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
function calculateVolumeAndArea(a) {
    if (Number.isInteger(a) && a>0) {
        let volume = 0;
            area = 0;
            volume = a*a*a;
            area = 6*a*a;
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return ("При вычислении произошла ошибка");
    }
}
calculateVolumeAndArea(5);


// Место для второй задачи
function getCoupeNumber(x) {
  
    if ( typeof(x) !== 'number' || !Number.isInteger(x) || x<0 ) {
        return ("Ошибка. Проверьте правильность введенного номера места");

   }if (x === 0 || x > 36) {
        return "Таких мест в вагоне не существует";

    }else { 
       let coupeNumber = Math.ceil(x/4);
       return coupeNumber;
   }
}
getCoupeNumber();


// Упражнение 8.
// Место для первой задачи
function getTimeFromMinutes(x) {

    if ( typeof(x) !== 'number' || !Number.isInteger(x) || x<0 ) {
        console.log ("Ошибка, проверьте данные");

    } else {
        let hour = Math.floor(x/60);
            minutes = x % 60 ;

    let str = '';

    switch (hour) {
        
        case 1:
        str = 'час';
        break;

        case 2:
        case 3:
        case 4:
        str = 'часа';
        break;

        default:
        str = 'часов';
    }
        
    return `Это ${hour} ${str} и ${minutes} минут`;

    }

}
getTimeFromMinutes();


function getTimeFromMinutes(x) {

    if ( typeof(x) !== 'number' || !Number.isInteger(x) || x<0 ) {
        console.log ("Ошибка, проверьте данные");

    } else {
        let hours = Math.floor(x/60);
            minutes = x % 60 ;

    let hoursStr = '';

    switch (hours) {
        
        case 1:
        hoursStr = 'час';
        break;

        case 2:
        case 3:
        case 4:
        hoursStr = 'часа';
        break;

        default:
        hoursStr = 'часов';
    }

    let minutesStr = '';

    switch (minutes) {
        
        case 1:
        minutesStr = 'минута';
        break;

        case 2:
        case 3:
        case 4:
        minutesStr = 'минуты';
        break;

        default:
        minutesStr = 'минут';
    }
        
    console.log (`Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`);

    }

}
getTimeFromMinutes(82);