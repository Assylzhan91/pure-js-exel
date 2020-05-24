const charCodeAt = {
    A: 65,
    Z: 90,
}

function toChar(_, index) {
    return String.fromCharCode(charCodeAt.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = charCodeAt.Z - charCodeAt.A + 1
    const rows = []
    const columns = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(columns))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}

function createRow(content, num = '') {
    const colResize = num ? `<div class="row-resize"></div>` : ''
    return `<div class="row">
        <div class="row-info">${num} ${colResize}</div>
        <div class="row-data">${content}</div>
      </div>`
}

const toColumn = (col) =>
    `<div class="column">
    ${col}
    <div class="col-resize"></div>
</div>`

const toCell = ()=> `<div class="cell" contenteditable></div>`
