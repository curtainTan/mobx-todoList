import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import { trace } from "mobx"

@inject( allStore => {
    return {
        left: allStore.store.left
    }
})
@observer
class TodoFooter extends Component {
    render(){
        trace()
        return (
            <footer>
                { this.props.left } items unfinished...
            </footer>
        )
    }
}

export default TodoFooter
