class DOM {
}

export function $() {
    return new DOM()
}

$.create = (tagName, classNames = '')=>{
    const el = document.createElement(tagName)
    if (classNames) {
        classNames instanceof Array ?
        el.classList.add(...classNames) :
        el.classList.add(classNames)
    }
    return el
}
