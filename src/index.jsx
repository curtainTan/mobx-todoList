import React, { Component } from "react"
import ReactDOM from "react-dom"
import { observer, Provider } from "mobx-react"
import { trace } from "mobx"

import TodoHeader from "./conponent/TodoHeader.jsx"
import TodoView from "./conponent/TodoView.jsx"
import TodoFooter from "./conponent/TodoFooter.jsx"

import ss from "./store.js"

@observer
class TodoList extends Component {
    render(){
        trace()
        return (
            <div className="todo-list" >
                <TodoHeader />
                <ul>
                    <TodoView />
                </ul>
                <TodoFooter />
            </div>
        )
    }
}

ReactDOM.render( (
    <Provider { ...ss } >
        <TodoList />
    </Provider>
), document.querySelector("#root") )
