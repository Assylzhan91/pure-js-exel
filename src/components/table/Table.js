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
            document.onselectstart = (e)=> e.preventDefault()
            const $target = $(event.target)
            const $parent = $target.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            const type = $target.data.resize
            let value
            $target.css({opacity: 1, zIndex: 1000, bottom: '-5000px'})
            const mouseMoveHandler = (e) => {
                if (type === 'col') {
                    const delta = e.pageX - coords.right
                    value = coords.width + delta
                    $target.css({right: -delta + 'px'})
                } else {
                    const diff = e.pageY - coords.bottom
                    $parent.css({height: coords.height + diff + 'px'})
                }
            }

            const removeMouseDown = ()=> {
                if (type === 'col') {
                    $parent.css({width: value + 'px'})
                    this.$root.findAll(`[data-col="${$parent.data.col}"]`)
                        .forEach((item)=>item.style.width = value + 'px')
                }
                document.removeEventListener('mousemove', mouseMoveHandler)
                document.removeEventListener('mouseup', removeMouseDown)
                $target.$el.removeAttribute('style')
            }
            document.addEventListener('mousemove', mouseMoveHandler)
            document.addEventListener('mouseup', removeMouseDown)
        }
    }
}
