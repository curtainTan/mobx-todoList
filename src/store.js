import { observable, action, computed, observe } from "mobx"

class Todo {
    id = Math.random()
    @observable title = ""
    @observable finished = false
    constructor( title ){
        this.title = title
    }
    @action.bound toggle(){
        this.finished = !this.finished
    }
}

class Store {
    @observable todos = []
    disposers = []
    @action.bound createTodo( title ){
        this.todos.unshift( new Todo( title ) )
    }
    @computed get left(){
        return this.todos.filter( todo => {
            return !todo.finished
        }).length
    }
    @action.bound removeTodo( todo ){
        this.todos.remove( todo )
    }

    constructor(){
        observe( this.todos, change => {
            this.disposers.forEach( disposer => disposer() )
            this.disposers = []
            for( let todo of change.object ){
                var disposer = observe( todo, change => {
                    console.log( change )
                })
                this.disposers.push( disposer )
            }
        })
    }
}

const store = new Store()

const ss = {
    store
}

export default ss
