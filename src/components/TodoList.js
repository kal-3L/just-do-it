import React from 'react';

function TodoList(props) {
    
    return(

        <section>

            <ul className='list-group'>
                {props.children}
            </ul>

        </section>

    );

}

export { TodoList } ;