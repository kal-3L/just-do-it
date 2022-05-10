import React from 'react';
import { TodoContext } from '../appcontext';

function TodoForm() {

    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const [ invalidTask, setInvalidTask ] = React.useState(false);

    const { addTodo } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }   

    const onSubmit = (event) => {
        event.preventDefault();
        if(!newTodoValue){
            setInvalidTask(true);
            return;
        }else{
            setInvalidTask(false);
        }
        addTodo(newTodoValue);
        setNewTodoValue('');
    }

    return(
        <>
        
            <form onSubmit={ onSubmit }>

                <div className="mb-3 mt-3">
                    <textarea value={ newTodoValue } onChange={onChange} className={`form-control  ${invalidTask ? 'is-invalid' : ''}` }id="exampleFormControlTextarea1" placeholder='write something...' rows="3"></textarea>
                </div>
             
                { invalidTask &&  <small className='text-danger' style={{fontFamily: ['Cabin Sketch']}}> Please, write a task description. </small>}
              
                <div className='w-100 d-flex justify-content-end mt-4'>
                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </div>

            </form>

        </>
    )
}

export { TodoForm }