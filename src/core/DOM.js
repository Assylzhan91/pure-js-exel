class DOM {
}

export function $() {
    return new DOM()
}

$.create = (tagName, classNames = '')=>{
    const el = document.createElement(tagName)
    if (classNames) {
        if (classNames instanceof Array) {
            el.classList.add(...classNames)
        } else {
            el.classList.add(classNames)
        }
    }
    return el
}
