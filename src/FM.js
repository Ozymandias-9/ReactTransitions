import React, { useState, useRef } from "react";
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';

function Todo(props) {
    const variants = {
        out: {
            x: '120%',
            transition: {
                duration: .3,
            }
        },
        on: i => ({
            x: '0%',
            transition: {
                delay: i * .3,
            },
        }),
        outExit: {
            x: '-120%',
            transition: {
                duration: .3,
            }
        },
    }
    return (
        <Reorder.Item
            key={props.todo.id}
            value={props.todo}
        >
            <motion.div
                layout
                initial='out'
                animate='on'
                exit='outExit'
                variants={variants}
                custom={(props.new) ? 0 : props.custom}
                className='text-teal-600 flex justify-between border-b-gray-300 border-b-[1px] py-3 text-right mr-4 relative'
            >
                <div className='w-7 h-7 mr-4 cursor-pointer'><FaCheck size={25} onClick={() => props.onCheck(props.value)} /></div>
                <p>{props.todo.todo}</p>
            </motion.div>
        </Reorder.Item>
    )
}

function MyComponent() {
    const todoList = JSON.parse(window.localStorage.getItem('todoList'));

    const [todos, setTodos] = useState(todoList);
    const [newEl, setNewEl] = useState(false);
    const input = useRef(null);
    
    window.localStorage.setItem('todoList', JSON.stringify(todos));

    function handleKeyDown(e) {
        (e.key === 'Enter') && handleWrite();
    }

    function handleWrite() {
        if (input.current.value === '') return false;

        let newTodos = todos.slice(0);
        newTodos.push({ id: uuid(), todo: input.current.value });
        setTodos(newTodos);
        setNewEl(true);

        input.current.value = '';
    }

    function handleCheck(id) {
        let newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-1/3 h-4/6 flex flex-col items-center rounded-md'>
                <div className='w-full border-b-gray-300 border-b-[1px] pb-4'>
                    <h1 className='font-semibold text-teal-600 p-2 w-full text-center text-3xl'>Todos</h1>
                    <div className='text-gray-400 w-full flex justify-center'>
                        <input 
                            ref={input}
                            className=' w-2/3 text-teal-600 border-[1px] border-gray-300 focus:outline-none focus:border-teal-600 transition duration-200 pl-1'
                            placeholder='Escriba una nueva tarea:'
                            onKeyDown={handleKeyDown}></input>
                        <div className='ml-2 cursor-pointer'><FaPencilAlt size={25} onClick={handleWrite} /></div>
                    </div>
                </div>
                <div className='w-3/4 h-4/6 mt-3 overflow-y-auto overflow-x-hidden'>
                    <Reorder.Group
                        values={todos}
                        onReorder={setTodos}
                    >
                        <AnimatePresence>
                            {todos.map((todo, i) => {
                                return (
                                    <Todo
                                        key={todo.id}
                                        value={i}
                                        new={(i === todos.length - 1 && newEl) ? true : false}
                                        todo={todo}
                                        onCheck={(x) => handleCheck(todo.id)}
                                        custom={i}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </Reorder.Group>
                </div>
            </div>
        </div>
    )
}
export default MyComponent;