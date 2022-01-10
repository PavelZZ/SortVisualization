const slider = document.getElementById("arrayLength");
const sliderSpeed = document.getElementById("arraySpeed");
const outputN = document.getElementById("arrayValue");;
const randomButton = document.querySelector("#random");
const sortButton = document.querySelector("#sort");

outputN.innerHTML = slider.value;
const elements = new BubbleSort();
let N = slider.value;
elements.generateArray();

//Открытие инструкции при запуске страницы
// При первом запуске вкладки со страницей появляется инструкция
if (!sessionStorage.getItem("open")) {
    openModal = new ModalWindow();
    openModal.open();
}

sessionStorage.setItem("open", 1);

slider.oninput = function () {
    outputN.innerHTML = this.value;
}
sliderSpeed.oninput = function () {
    elementSwapDelay = this.value;
}

// Pop up при завершении сортировки
function popupDoneShow() {
    const popupDone = document.querySelector("#doneAlert");
    popupDone.classList.add("showAlert");
    popupDone.classList.toggle("hide");
    popupDone.classList.toggle("show");
    setTimeout(function () {
        popupDone.classList.add("hide");
        popupDone.classList.remove("show");
    }, 3000);
}
randomButton.onclick = () => {
    elements.clearArray();
    // При генерации нового массива возвращаем возможность нажатия на кнопку Сортировать
    elements.generateArray().then(() => {
        sortButton.style.pointerEvents = "auto";
    });
}
sortButton.onclick = function () {
    // Пока процесс сортировки запущен, нельзя нажимать кнопку Сортировать
    this.style.pointerEvents = "none";
    elements.bubblesort().then(() => {
        popupDoneShow();
    });
}
// Генерируем новый массив и "включаем" кнопку "Сортировать!"
slider.addEventListener("mouseup", function () {
    N = this.value;
    elements.generateArray().then(() => {
        sortButton.style.pointerEvents = "auto";
    });
});
// Очищаем предыдущий массив для генерации нового
slider.addEventListener("mousedown", e => {
    elements.clearArray();
});



