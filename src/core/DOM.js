class DOM {
    constructor(selector) {
        this.$el = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    get data() {
        return this.$el.dataset
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css(styles = {}) {
        Object
            .entries(styles)
            .forEach((item)=>{
            this.$el.style[item[0]] = item[1]
        })
    }

    append(node) {
        if (node instanceof DOM) {
            node = node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }
}

export function $(selector) {
    return new DOM(selector)
}

$.create = (tagName, classNames = '')=>{
    const el = document.createElement(tagName)
    if (classNames) {
        classNames instanceof Array
        ? el.classList.add(...classNames)
        : el.classList.add(classNames)
    }
    return $(el)
}
