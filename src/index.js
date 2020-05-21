import {Excel} from '@/components/excel/Excel.js'
import {Header} from '@components/header/Header'
import {Formula} from '@components/formula/Formula'
import {Toolbar} from '@components/toolbar/Toolbar'
import {Table} from '@components/table/Table'

import './index.html'
import './styles/styles.scss'

const excel = new Excel('#app', {
    components: [Header, Formula, Toolbar, Table],

})
excel
