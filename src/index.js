import foo from "./module"
import './styles/styles.scss'

class NewClass {
    foo(){
        console.log('create Class')
    }
}
const firstClass = new NewClass()
firstClass.foo()

console.log(foo())
console.log(2)