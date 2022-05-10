import React from 'react';
import { TodoContext } from '../appcontext';

function TodoSearch() {
    
    const  { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchTask = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <>

            <div className='d-flex justify-content-end'>
            
                <input 
                    type="text" 
                    className="form-control form-control-sm " 
                    placeholder="Search" 
                    aria-label="Search" 
                    aria-describedby="button-addon2" 
                    onChange={ onSearchTask }
                    value={searchValue} />

            </div>

        </>
    );

}

export { TodoSearch } ;