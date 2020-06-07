import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@components/table/table.template'
import {resizeTable} from './table.resize';
import {shouldResize} from './helpers';

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
        if (shouldResize(event)) {
            resizeTable(this.$root, event)
        }
    }
}

// a Comment for check it out
// a Comment for check it out
// a Comment for check it out
// a Comment for check it out
// a Comment for check it out
// a Comment for check it out
