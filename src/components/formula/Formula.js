import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = ['excel__formula']
    toHTML() {
        return `
          <div class="info formula__info">fx</div>
          <div class="input formula__input" contenteditable spellcheck></div>
        `
    }
}
