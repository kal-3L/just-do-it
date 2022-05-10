import React from 'react';

function CreateTodoButton() {

    return(
        <>
            <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add long task
            </button>
        </>

    );

}

export { CreateTodoButton } ;