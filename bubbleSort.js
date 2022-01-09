let container = document.querySelector(".array");
const clrNeon = "#FF14BD"
const shift = 40;  // определяет сдвиг каждого элемента в массиве
let elementSwapDelay = 150; // задержка, определяющаяя время сортировки
class BubbleSort {
    async generateArray() {
        for (let i = 0; i < N; i++) {
            let value = Math.ceil(Math.random() * 100);
            let arrayElement = document.createElement("div");
            arrayElement.classList.add("array__element");
            arrayElement.style.height = `${value * 3}px`;
            arrayElement.style.transform = `translateX(${i * shift}px)`;

            let arrayElementLabel = document.createElement("label");
            arrayElementLabel.classList.add("array__label");
            arrayElementLabel.innerText = value;
            arrayElement.appendChild(arrayElementLabel);
            container.appendChild(arrayElement);
        }
        container.style.width = `${shift * N - 10}px`; // ширина заднего фона массива
    }

    swap(item1, item2) {
        return new Promise((resolve) => {
            // Перестановка элементов (обмен их стилей)
            [item1.style.transform, item2.style.transform] = [item2.style.transform, item1.style.transform];
            window.requestAnimationFrame(() => {
                setTimeout(() => {
                    container.insertBefore(item2, item1);
                    resolve();
                }, elementSwapDelay);
            });
        });
    }
    async bubblesort() {
        let block = document.querySelectorAll(".array__element");
        for (let i = 0; i < block.length; i++) {
            for (let j = 0; j < block.length - i - 1; j++) {

                // Выделение двух сравниваемых столбцов
                block[j].style.backgroundColor = "#FF4949";
                block[j + 1].style.backgroundColor = "#FF4949";
                block[j + 1].style.setProperty("--clr-neon", "#FF4949");
                block[j].style.setProperty("--clr-neon", "#FF4949");

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, elementSwapDelay)
                );
                // Получение численных значений столбцов для их сравнения
                let value1 = Number(block[j].firstChild.innerHTML);
                let value2 = Number(block[j + 1].firstChild.innerHTML);

                // Сравнение двух значений столбцов
                if (value1 > value2) {
                    await this.swap(block[j], block[j + 1]);
                    block = document.querySelectorAll(".array__element");
                }

                // Возвращение к оригинальному цвету столбца
                block[j].style.backgroundColor = clrNeon;
                block[j + 1].style.backgroundColor = clrNeon;
                block[j].style.setProperty("--clr-neon", clrNeon);
            }
            // Помечаем зеленым уже отсортированные элементы

            block[block.length - i - 1].style.backgroundColor = "#13CE66";

            //Отражение снизу
            block[block.length - i - 1].style.setProperty("--clr-neon", "#13CE66");
        }
        return 1;
    }
    // Очищаем массив
    clearArray() {
        container.innerHTML = "";
    }
}

