export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector) //со знаком $ - DOM-элементы
    }

    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}