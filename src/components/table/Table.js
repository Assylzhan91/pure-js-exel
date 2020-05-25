import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@components/table/table.template'
import {$} from '@core/DOM';

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
        if (event.target.dataset.resize) {
            const $target = $(event.target)
            const $parent = $target.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            const mouseMoveHandler = (e) =>{
            const delta = e.pageX - coords.right
            const value = coords.width + delta
            console.log(value)
                $parent.$el.style.width = value + 'px'
            }
            document.addEventListener('mousemove', mouseMoveHandler)

            document.addEventListener('mouseup', (e)=>{
                document.removeEventListener('mousemove', mouseMoveHandler)
            })
        }
    }
}
