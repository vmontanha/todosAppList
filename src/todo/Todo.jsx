import React from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
          return (
                    <div>
                              <PageHeader name="Tarefas" />
                              <TodoForm />
                              <TodoList />
                    </div>
          )
}

export default Todo