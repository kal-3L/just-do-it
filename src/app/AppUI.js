// import './App.css';
import React from 'react';
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { CreateTask } from '../components/CreateTask'
import { TodoContext } from '../appcontext';
import { Modal } from '../modal'
import { TodoForm } from '../components/TodoForm';
import '../App.css';

function AppUI() {
    
    const { error, loading, filterTodos, completeTodo, deleteTodo } = React.useContext(TodoContext) 

    return (

        <>

            <div id="particle-container">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>

            <div className='container-sm col-xs-10 col-sm-8 col-md-7 col-lg-5 col-xl-4'>
            
                <TodoCounter/>

                <CreateTask/>

                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <CreateTodoButton/>

                    <TodoSearch/>
                    
                </div>

                    { loading && <p>Cargando...</p>}
                    { error && <p>Hubo un error</p>}

                { filterTodos.length > 0 && 

                <TodoList>
                    
                    { filterTodos.map((parsedTodos, index) => (
                    
                        <TodoItem 
                            key={ index } 
                            text={ parsedTodos.text } 
                            completed={ parsedTodos.completed } 
                            onComplete={ () => completeTodo(parsedTodos.id) }
                            onDelete={ () => deleteTodo(parsedTodos.id) }
                            />

                    ))}

                </TodoList>
                }

                { !loading && !filterTodos.length &&  
                    <div class="alert alert-dismissible alert-primary mt-4 text-center" style={{fontFamily: ['Cabin Sketch'], fontWeight: 400}}>
                    
                        <span> No tasks... </span> 

                    </div>
                }

                <Modal> 

                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div className="modal-dialog  modal-dialog-centered">

                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add new Task</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <TodoForm> </TodoForm>
                                </div>

                            </div>

                        </div>

                    </div>

                </Modal>
            
             
            </div>

        </>

  );
}

export { AppUI };
