import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@components/table/table.template'

export class Table extends ExcelComponent {
    static className = ['table', 'excel__table']
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown'],
        })
    }
    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        const resize = event.target.dataset.resize
        if (resize) {
            console.log('Start resize', resize)
        }
    }
}
