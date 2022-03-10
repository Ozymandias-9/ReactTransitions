import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Item({ text }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {text}
        </motion.div>
    )
}

function MyComponent({ isVisible, items }) {
    return (
        <div>
            <AnimatePresence>
                {/* {isVisible && (
                <motion.div
                    className="w-48 h-48 bg-teal-600 rounded-md my-2"
                    key="modal"
                    initial={{ height: 0, opacity: 0, display: 'block' }}
                    animate={{ height: '12rem', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                />
            )} */}
                {items.map((item, i) => {
                    return <Item key={`item-${i}`} text={item}/>
                })}
            </AnimatePresence>
        </div>
    )
}

const Practice = () => {
    // const [visible, setVisible] = useState(true);
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6])
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            {/* <MyComponent isVisible={visible} /> */}
            <MyComponent items={items} />
            <button
                className="border-2 border-teal-600 w-48 h-12 rounded-md text-teal-600 hover:bg-teal-500 hover:border-teal-500 hover:text-white duration-300"
                // onClick={() => setVisible(i => !i)}
                onClick={() => setItems(i => i.slice(0, i.length - 1))}
            >
                Clickéame
            </button>
        </div>
    )
}

export default Practice;