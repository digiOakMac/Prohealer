import React from 'react'
import { Button } from 'semantic-ui-react'
import Party from "../../party/components/Party";
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
      <h3>Party</h3>
      <Party />
    </div>
  )
}

export default connect(mapStateToProps, dispatchProps)(TodosView)
