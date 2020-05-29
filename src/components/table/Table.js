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
        if (event.target.dataset.resize === 'col') {
            const $target = $(event.target)
            const $parent = $target.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            console.log($parent.data.col)
            const cells = this.$root.findAll(`[data-type="${$parent.data.col}"]`)

            const mouseMoveHandler = (e) => {
                const delta = e.pageX - coords.right
                const value = coords.width + delta
                $parent.$el.style.width = value + 'px'
                cells.forEach((item)=>{
                    item.style.width = value + 'px'
                })
            }

            document.addEventListener('mousemove', mouseMoveHandler)

            document.addEventListener('mouseup', (e)=>{
                document.removeEventListener('mousemove', mouseMoveHandler)
            })
        }
        if (event.target.dataset.resize === 'row') {
            const $target = $(event.target)
            const $parent = $target.closest('.row')
            const coords = $parent.getCoords()

            const mouseMoveHandler = (e) => {
                const diff = e.pageY - coords.bottom
                $parent.$el.style.height = coords.height + diff + 'px'
            }
            document.addEventListener('mousemove', mouseMoveHandler)

            document.addEventListener('mouseup', (e)=>{
                document.removeEventListener('mousemove', mouseMoveHandler)
            })
        }
    }
}
