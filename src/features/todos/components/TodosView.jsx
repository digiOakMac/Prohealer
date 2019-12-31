import React from 'react'
import Party from '../../party/components/Party'
import { connect } from 'react-redux'
import * as actions from '../actions'

const mapStateToProps = state => ({
  todos: state.app.todos,
})

const dispatchProps = {
  addTodo: actions.addTodo,
  ping: actions.ping,
}

const TodosView = props => {
  return (
    <Party />
  )
}

export default connect(mapStateToProps, dispatchProps)(TodosView)
