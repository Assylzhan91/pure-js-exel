import {$} from '@core/DOM'

export function resizeTable($root, event) {
    document.onselectstart = (e)=> e.preventDefault()
    const $target = $(event.target)
    const $parent = $target.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $target.data.resize
    let value
    const lineProp = type === 'col' ? 'bottom': 'right'
    $target.css({opacity: 1, zIndex: 1000, [lineProp]: '-5000px'})
    const mouseMoveHandler = (e) => {
        if (type === 'col') {
            const delta = e.pageX - coords.right
            value = coords.width + delta
            $target.css({right: -delta + 'px'})
        } else {
            const delta = e.pageY - coords.bottom
            value = coords.height + delta
            $target.css({bottom: -delta + 'px'})
        }
    }

    const removeMouseDown = ()=> {
        if (type === 'col') {
            $parent.css({width: value + 'px'})
            $root.findAll(`[data-col="${$parent.data.col}"]`)
                .forEach((item)=>item.style.width = value + 'px')
        } else {
            $parent.css({height: value + 'px'})
        }
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', removeMouseDown)
        $target.$el.removeAttribute('style')
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', removeMouseDown)
}
