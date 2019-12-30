import React from 'react'
import { Button } from 'semantic-ui-react'
import Portrait from "../../common/components/Portrait";
import { connect } from 'react-redux'
import * as actions from '../actions'

const mapStateToProps = state => ({
  todos: state.app.todos
})

const dispatchProps = {
  addTodo: actions.addTodo,
  ping: actions.ping
}

const TodosView = props => {
  const { addTodo, todos, ping } = props
  return (
    <div>
      <h3>Todo's</h3>
      <div>
        <Button onClick={() => addTodo({ id: 1, title: 'test todo'})}>Add todo</Button>
        <Button onClick={() => ping()}>Ping</Button>
      </div>
      <Portrait />
      <code>
        {JSON.stringify(todos, 2, null)}
      </code>
    </div>
  )
}

export default connect(mapStateToProps, dispatchProps)(TodosView)
