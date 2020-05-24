import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = ['header', 'excel__header']
    toHTML() {
        return `
          <div class="input-wrapper">
            <input class="input input__header" type="text" value="Новая таблица">
          </div>
          <div class="button-wrapper">
            <div class="button button__header button__header_delete">
              <span class="material-icons">
                delete
              </span>
            </div>
            <div class="button button__header button__header_exit">
              <span class="material-icons">
                exit_to_app
              </span>
            </div>
          </div>
        `
    }
}
