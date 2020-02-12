import React, { Component } from "react"
import { observer, inject } from "mobx-react"

@inject( "store" )
@observer
class TodoHeader extends Component {
    state = {
        inputValue : ""
    }

    handleSubmit = ( e ) => {
        e.preventDefault()

        let store = this.props.store
        var inputValue = this.state.inputValue

        store.createTodo( inputValue )

        this.setState({ inputValue: "" })

    }
    handleChange = ( e ) => {
        e.persist()
        var inputValue = e.target.value
        this.setState({
            inputValue: inputValue
        })
    }

    render(){
        return (
            <header>
                <form onSubmit={ this.handleSubmit } >
                    <input 
                    type="text" 
                    onChange={ e => this.handleChange( e )} 
                    value={ this.state.inputValue }
                    className="input"
                    placeholder=" what deeds to be finished? "
                    />
                </form>
            </header>
        )
    }
}

export default TodoHeader
