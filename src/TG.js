import React, { useState, useRef }  from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';
import {v4 as uuid} from 'uuid';

function Todo(props) {
    return (
        <div className={`text-teal-600 flex justify-between border-b-gray-300 border-b-[1px] py-3 text-right mr-4 relative`}>
            <div className='w-7 h-7 mr-4 cursor-pointer'><FaCheck size={25} onClick={() => props.onCheck(props.value)} /></div>
            <p>{props.todo}</p>
        </div>
    )
}

function App() {
    const todoList = JSON.parse(window.localStorage.getItem('todoList'));

    const [todos, setTodos] = useState(todoList);
    const input = useRef();

    function handleKeyDown(e) {
        (e.key === 'Enter') && handleWrite();
    }

    function handleWrite() {
        let newTodos = todos.slice(0);
        newTodos.push({id: uuid(), todo: input.current.value}); // Se utiliza una uuid para que la llave
        // no tenga problemas a la hora de ser utilizada por TransitionGroup
        // de ser muy similar tendría problemas de renderizado
        setTodos(newTodos);

        window.localStorage.setItem('todoList', JSON.stringify(newTodos));

        input.current.value = '';
    }

    function handleCheck(id) {
        let newTodos = todos.filter(todo => todo.id != id);
        setTodos(newTodos);

        window.localStorage.setItem('todoList', JSON.stringify(newTodos));
    }

    return(
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-1/3 h-4/6 flex flex-col flex-wrap items-center rounded-md'>
                <div className='w-full border-b-gray-300 border-b-[1px] pb-4'>
                    <h1 className='font-semibold text-teal-600 p-2 w-full text-center text-3xl'>Todos</h1>
                    <div className='text-gray-400 w-full flex justify-center'>
                        <input ref={input} className=' w-2/3 text-teal-600 border-[1px] border-gray-300 focus:outline-none focus:border-teal-600 transition duration-200 pl-1'
                            placeholder='Escriba una nueva tarea:'
                            onKeyDown={handleKeyDown}></input>
                        <div className='ml-2 cursor-pointer'><FaPencilAlt size={25} onClick={() => handleWrite()} /></div>
                    </div>
                </div>
                <div className='w-3/4 h-4/6 mt-3 overflow-y-auto overflow-x-hidden'>
                    <TransitionGroup> {/*Es un tipo de objeto que maneja las transiciones de entrada y salida de los componentes
                    es por eso que se ocupa un estado de useState para manejar los componentes en este elemento*/}
                        {todos.map(todo => {
                            return (
                                <CSSTransition
                                    key={todo.id}
                                    classNames='slide'
                                    timeout={500}
                                >
                                    <Todo
                                        key={`todo-${todo.id}`}
                                        todo={todo.todo}
                                        onCheck={(i) => handleCheck(todo.id)}
                                    />
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </div>
            </div>
        </div>
    )
}

export default App;