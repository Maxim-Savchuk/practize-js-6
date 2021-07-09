import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// const logMessage = () => {
//     console.log('Лог при  вызове callback функци через 3 секунды');
// }

// console.log('До вызова setTimeout');

// setTimeout(() => {
//     console.log('Внутри callback для setTimeout')
// }, 2000)

// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(`Лог через ${time}ms, потому что мы не отменили таймаут`);
}

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;

if (shouldCancelTimer) {
    clearTimeout(timerId);
}