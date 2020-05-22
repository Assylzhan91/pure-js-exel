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
    append(node) {
        if (node instanceof DOM) {
            node= node.$el
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
