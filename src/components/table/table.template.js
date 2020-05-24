const charCodeAt = {
    A: 65,
    Z: 90,
}

function toChar(_, index) {
    return String.fromCharCode(charCodeAt.A + index)
}

export function createTable(rowsCount = 15) {
    const colCount = charCodeAt.Z - charCodeAt.A + 1
    const rows = []
    const columns = new Array(colCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(columns))
    for (let i = 1; i < rowsCount; i++) {
        rows.push(createRow())
    }
    return rows.join('')
}

function createRow(content) {
    return `<div class="row">
        <div class="row-info"></div>
        <div class="row-data">${content}</div>
      </div>`
}

const toColumn = (col) =>`<div class="column">${col}</div>`

const createCell = ()=> `<div class="cell selected" contenteditable>A1</div>`
