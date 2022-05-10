import React from 'react';
import {ReactComponent as CheckIcon} from '../assets/icons/check.svg';
import {ReactComponent as CloseIcon} from '../assets/icons/close.svg';
import {ReactComponent as CircleIcon} from '../assets/icons/circle.svg';

function TodoItem({
    text,
    completed,
    onComplete,
    onDelete
}) {
    
    return(

        <li className='list-group-item d-flex justify-content-between align-items-center'>
            
            <div className='d-flex align-items-center'>

                <button 
                    type="button" 
                    className={`btn btn-sm me-3` } 
                    onClick={ onComplete }> 

                        { completed && (
                            <CheckIcon/>
                        )}

                        { !completed && (
                            <CircleIcon/>
                        )}

                </button>

                <span style={{fontFamily: ['Cabin Sketch']}} className={`mb-0 ${completed ? 'text-decoration-line-through' : '' }`} >{ text } </span>

            </div>

            <div>
                <button type="button" className="btn btn-sm" onClick={ onDelete }> <CloseIcon/> </button>
            </div>

        </li>

    );

}

export { TodoItem } ;