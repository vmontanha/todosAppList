import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/IconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
          const renderRows = () => {
                    const list = props.list || []
                    return list.map(todo => (
                              <tr key={todo._id}>
                                        <td className={todo.done ? 'markedAsDone' : ''}>{todo.title}</td>
                                        <td>
                                                  <IconButton btnStyle='success' icon='check' hide={todo.completed} onClick={() => props.markAsDone(todo)} />
                                                  {/* <IconButton btnStyle='warning' icon='undo' hide={!todo.completed} onClick={() => props.markAsPending(todo)} /> */}
                                                  <IconButton btnStyle='danger' icon='close' hide={!todo.completed} onClick={() => props.remove(todo)} />
                                        </td>
                              </tr>
                    ))
          }
          return (
                    <table className='table'>
                              <thead>
                                        <tr>
                                                  <th>Descrição</th>
                                                  <th className='tableActions'>Ações</th>
                                        </tr>
                              </thead>
                              <tbody>
                                        {renderRows()}
                              </tbody>
                    </table>
          )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
          bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)