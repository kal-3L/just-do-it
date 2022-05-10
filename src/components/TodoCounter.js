import React from 'react';
import { TodoContext } from '../appcontext';

function TodoCounter() {
    
    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return(
        <>

        <div className='mt-4 mb-5'>
            <div className='text-center' style={{fontSize: '42pt', fontFamily: ['Cabin Sketch']}} >Just Do It.</div>
            <span className='text-muted text-center d-block' style={{fontFamily: ['Cabin Sketch']}}>Has completed { completedTodos } of { totalTodos } tasks</span>
        </div>

        </>
    );

}

export { TodoCounter } ;