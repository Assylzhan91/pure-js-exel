import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@components/table/table.template'

export class Table extends ExcelComponent {
    static className = ['table', 'excel__table']
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
        })
    }
    toHTML() {
        return createTable(20)
    }
    onClick() {
        console.log('onClick')
    }
    onMousedown() {
        console.log('onMouseDown')
    }
    onMousemove(event) {
        console.log('onMousemove')
    }
    onMouseup(event) {
        console.log('onMouseup')
    }
}
