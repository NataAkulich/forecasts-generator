/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */



const buttonClick = document.querySelector(".forecast-btn");

buttonClick.addEventListener("click", clickOnMe);

const element = document.querySelector("h1");

const predictions = [

    "Если Вы проявите инициативу,успех не заставит себя ждать",

    "Ваши надежды и планы сбудутся сверх всяких ожиданий",

    "Готовьтесь к романтическим приключениям",

    "В этом месяце ночная жизнь для вас",

    "Вам пора отдохнуть",

];


function getRandomNum(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}


function clickOnMe() {
    const index = getRandomNum(0, predictions.length);
    element.textContent = predictions[index];

    const titleContainer = document.querySelector('.forecasts'); //Для хранения предсказаний

    function createNewForecast(title, text) {

        const template = document.querySelector("#forecast-item");

        const newForeCast = template.content.cloneNode(true);

        newForeCast.querySelector('h3').textContent = title;

        newForeCast.querySelector('p').textContent = text;

        titleContainer.append(newForeCast);

    }

    createNewForecast(predictions[index]);





    const elementOne = document.querySelector(".forecast-btn");

    elementOne.addEventListener("click", clickOnMe);


    const persent = document.querySelector("p");
    const number = (Math.floor(Math.random() * 100) + 1);
    persent.textContent = "Вероятность:" + number + "%";




}




/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно  sendInput.value «Мои предсказания» — .forecasts  */

// forecast-item