// const info = require('./lib/mylib')
const { name, sayHello, skills } = require('./lib/mylib')
const TodoService = require('./services/todoservice')

function main() {
    //console.log(info.name, info.sayHello(), info.skills)
    console.log(name, sayHello(), skills)
    let todoService = new TodoService();
    console.log(todoService.findAll())
}
main()