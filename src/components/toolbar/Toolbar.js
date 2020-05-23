import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = ['toolbar', 'excel__toolbar']
    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
        })
    }

    toHTML() {
        return `
            <div class="button button__toolbar">
              <span class="material-icons">
                format_align_left
              </span>
            </div>
            <div class="button button__toolbar">
              <span class="material-icons">
                format_align_center
              </span>
            </div>
            <div class="button button__toolbar">
              <span class="material-icons">
                format_align_right
              </span>
            </div>
            <div class="button button__toolbar">
              <span class="material-icons">
               format_bold
              </span>
            </div>
            <div class="button button__toolbar">
              <span class="material-icons">
               format_italic
              </span>
            </div>
            <div class="button button__toolbar">
              <span class="material-icons">
                 format_underline
              </span>
            </div>`
    }

    onClick(event) {
        console.log(event.target)
    }
}
