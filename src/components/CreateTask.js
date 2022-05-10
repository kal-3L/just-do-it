import React, { useState } from 'react';
import { TodoContext } from '../appcontext';

function CreateTask() {

    const [ taskTitle, setTaskTitle ] = useState('');
    const [ invalidTask, setInvalidTask ] = useState(false);

    const { addTodo } = React.useContext(TodoContext);

    const onCreateTask = (event) => {
        if(event.key === "Enter"){
            if (!taskTitle){
                setInvalidTask(true);
                return;
            }else{
                setInvalidTask(false);
            }
            addTodo(taskTitle);
            setTaskTitle('');
        }
    }

    const createTask = () =>{
        if (!taskTitle){
            setInvalidTask(true);
            return;
        }else{
            setInvalidTask(false);
        }
        addTodo(taskTitle);
        setTaskTitle('');
    }

    const onChange = (event) => {
        setTaskTitle(event.target.value);
    }

    return(
        
        <div className='mb-5'>

            <div className="input-group ">

                <input 
                    type="text" 
                    className={`form-control  ${invalidTask ? 'is-invalid' : ''}` }
                    placeholder="Add new task" 
                    aria-label="Add new task" 
                    aria-describedby="button-addon2" 
                    value={ taskTitle }
                    onChange={ onChange } 
                    onKeyUp={ onCreateTask } />

                <button className="btn btn-outline-secondary" onClick={ createTask } type="button" id="button-addon2">Add new</button>

            </div>
            
            { invalidTask &&  <small className='text-danger' style={{ fontFamily: ['Cabin Sketch'] }}> Please, write a task description. </small>}
              
        </div>
    );

}

export { CreateTask } ;