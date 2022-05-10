import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import uuid from 'react-uuid';

const TodoContext = React.createContext();

function TodoProvider(props){

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState(''); 
    
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length;
    const filterTodos = todos.filter( todo => todo.text.toLocaleLowerCase().includes( searchValue.toLowerCase() ))
    
    const addTodo = (text) => {
        
        const newTodos = [...todos];
        newTodos.push({
            id: uuid(),
            completed: false,
            text
        })
        saveTodos(newTodos);
    }

    const completeTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        saveTodos(newTodos);
    }

    return(
        
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            completeTodo,
            addTodo,
            deleteTodo
        }}>

            { props.children }

        </TodoContext.Provider>

    )

}

export { TodoContext, TodoProvider };