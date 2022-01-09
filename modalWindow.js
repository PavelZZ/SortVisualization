class ModalWindow {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add("modal");
        this.container.innerHTML = this.render();
    }
    render() {
        return `
            <div class="modal__content">
                <h2>Инструкция</h2>
                <ul>
                    <li>Для запуска процесса сортировки нажмите кнопку "Сортировать!"</li>
                    <li>Кнопка "Рандом" генерирует новый массив со случайными значениями</li>
                    <li>Ползунки указывают количество элементов в массиве и скорость сортировки</li>
                    <li>Если хотите остановить процесс, нажмите на кнопку "Рандом" или измените количество элементов в массиве</li>
                </ul>
                <button class="modal__btn">ОК</button>
            </div>
        `
    }
    open() {
        // Вставка модального окна в dom-дерево
        const insertIn = document.querySelector(".array");
        insertIn.insertAdjacentElement('afterend', this.container);
        this.container.style.display = "block";
        this.closeBtn = document.querySelector(".modal__btn");
        this.closeBtn.addEventListener("click", () => {
            this.closeModal();
        }, { once: true });

        window.addEventListener("click", (event) => {
            if (event.target === this.container) {
                this.closeModal();
            }
        });
        window.addEventListener("keydown", event => {
            console.log("close");
            if (event.key === "Escape") this.closeModal();
        }, { once: true });
    }
    closeModal() {
        // Удаление окна из dom-дерева при закрытии
        this.container.style.display = "none";
        this.container.remove();
    }
}

const openGuide = document.querySelector("#guide");
openGuide.addEventListener("click", () => {
    const openModal = new ModalWindow();
    openModal.open();
});

