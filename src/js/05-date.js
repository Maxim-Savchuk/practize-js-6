import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

const date1 = new Date().getTime();
console.log('date1', date1);

setTimeout(() => {
    const date2 = new Date().getTime();

    console.log('date1', date1);
    console.log('date2', date2);

    console.log(date2 - date1);
}, 3000)