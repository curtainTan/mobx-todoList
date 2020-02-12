import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { observer, inject } from "mobx-react"

@inject( "store" )
@observer
class TodoView extends Component {
    render(){
        const store = this.props.store
        const { todos } = store
        return todos.map( todo => {
            return (
                <li key={ todo.id } className="todo-item">
                    <TodoItem todo={ todo } />
                    <span className="delete" onClick={ e => store.removeTodo( todo ) } >X</span>
                </li>
            )
        })
    }
}

@observer
class TodoItem extends Component{
    static propTypes = {
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            finished: PropTypes.bool.isRequired
        }).isRequired
    }
    handleClick = () => {
        this.props.todo.toggle()
    }
    render(){
        const todo = this.props.todo
        return (
            <Fragment>
                <input 
                type="checkbox" 
                className="toggle" 
                checked={ todo.finished } 
                onChange={ this.handleClick } />
                <span className={["title", todo.finished && "finished"].join(" ")} >
                    { todo.title }
                </span>
            </Fragment>
        )
    }
}

export default TodoView
