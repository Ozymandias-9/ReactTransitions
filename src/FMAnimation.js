import React from "react";
import { motion, useAnimation } from 'framer-motion';

function MyComponent() {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    const dVariants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
            x: 0
        }),
        hidden: { opacity: 0, x: -100 },
    }

    const items = [1, 2, 3, 4, 5]

    const controls = useAnimation();
    const menuControls = useAnimation();
    const itemControls = useAnimation();
    const subItemControls = useAnimation();

    const sequence = async () => {
        await menuControls.start({ x: 0, opacity: 1 })
        await itemControls.start(i => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }))
        return await subItemControls.start(i => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }))
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            {/* PROPIEDADES DE MOTION
            Podemos poner directivas para animaciones en la sección de animate.
            Podemos también determinar propiedades iniciales para el renderizado y que cambien una vez puestos con animate.
            La propiedad transition determina el comportamiento de las transiciones, tanto su movimiento como el tiempo, también puede ser un delay. */}
            {/* <motion.div
                className="w-24 h-24 bg-teal-600 rounded-lg"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 2,
                    translateX: '-100%',
                }}
                transition={{
                    ease: 'easeIn',
                    duration: .5
                }}
            /> */}
            {/* KEYFRAMES
            Tal cual lo haríamos con un documento de CSS, podemos definir el avance de la animación con respecto al tiempo de la animación
            con keyframes. */}
            {/* <motion.circle
                cx={500}
                animate={{ cx: [null, 100, 200] }}
                transition={{ duration: 3, times: [0, 0.2, 1] }}
            /> */}
            {/* VARIANTES
            Se pueden ocupar variantes que funcionan como variables y ser utilizadas dentro de las secciones de animate y initial por ejemplo.
            De igual manera sirve para poder definir de propiedades de una manera más fácil y reusable. */}
            {/* <motion.div
                className="w-24 h-24 bg-teal-600 rounded-lg"
                initial="hidden"
                animate="visible"
                variants={variants}
            /> */}
            {/* PROPAGACIÓN
            Los elementos y sus hijos pueden tener diferentes variables para trabajar independiemente en cuanto a animaciones,
            de cualquier modo. La propagación puede hacer el pase de estado a los elementos hijos, por lo que de tener variantes con nombres
            similares, en cuanto se anime el del padre, lo hará también el del hijo.*/}
            {/* <motion.ul
                className="w-48 h-48 bg-teal-600 rounded-lg flex justify-around items-center flex-col"
                initial="hidden"
                animate="visible"
                variants={list}
            >
                <motion.li className="w-20 h-8 bg-white rounded-lg" variants={item} />
                <motion.li className="w-20 h-8 bg-white rounded-lg" variants={item} />
                <motion.li className="w-20 h-8 bg-white rounded-lg" variants={item} />
                <motion.li className="w-20 h-8 bg-white rounded-lg" variants={item} />
            </motion.ul> */}
            {/* VARIANTES DINÁMICAS
            Existen variantes dinámicas, en las que las variantes pueden ser funciones para poder cambiar el valor de la variante. */}
            {/* {items.map((item, i) => (
                <motion.li
                    className="w-6 h-6 bg-teal-600 rounded-full list-none mx-2"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={dVariants}
                />
            ))} */}
            {/* CONTROLES
            Funcionan como los hooks de react, en los que con la función start puede modificar las propiedades dentro de los controles
            para poder modificar el elemento. Pueden ser también controlados con variantes. */}
            {/* <motion.div className="h-48 w-48 border-2 border-teal-600 flex justify-center items-center" animate={controls}>
                <button
                    className="h-8 w-24 bg-teal-500 border-2 border-teal-600 text-white"
                    onClick={() => controls.start({ opacity: 0, x: 100, transition: { duration: .3 } })}
                >
                    Controls
                </button>
            </motion.div> */}
            {/* SECUENCIAS
            Se pueden hacer secuencias de animaciones para poder ejecutarlas seguidas con los hooks de controles. Ahora bien, los controles devuleven promesas que
            garantizan que las animaciones se concluyan y luego sigan con otras. Entonces, como en el ejemplo de abajo si quisieramos que se animara el pequeño círculo con el
            rectangulo tendríamos que usar un mismo tipo de animación para los dos componentes. */}
            {/* <motion.div
                className="w-96 h-96 bg-teal-600 rounded-md flex flex-col items-center justify-around"
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                animate={menuControls}
            >
                <motion.div className="h-8 w-56 bg-white rounded-md flex justify-start items-center px-2" animate={itemControls} custom={0} initial={{ x: -100, opacity: 0 }}>
                    <motion.div className="h-4 w-4 bg-teal-600 rounded-full" animate={subItemControls} custom={0} initial={{ x: -100, opacity: 0 }}></motion.div>
                </motion.div>
                <motion.div className="h-8 w-56 bg-white rounded-md flex justify-start items-center px-2" animate={itemControls} custom={1} initial={{ x: -100, opacity: 0 }}>
                    <motion.div className="h-4 w-4 bg-teal-600 rounded-full" animate={subItemControls} custom={1} initial={{ x: -100, opacity: 0 }}></motion.div>
                </motion.div>
                <motion.div className="h-8 w-56 bg-white rounded-md flex justify-start items-center px-2" animate={itemControls} custom={2} initial={{ x: -100, opacity: 0 }}>
                    <motion.div className="h-4 w-4 bg-teal-600 rounded-full" animate={subItemControls} custom={2} initial={{ x: -100, opacity: 0 }}></motion.div>
                </motion.div>
                <motion.div className="h-8 w-56 bg-white rounded-md flex justify-start items-center px-2" animate={itemControls} custom={3} initial={{ x: -100, opacity: 0 }}>
                    <motion.div className="h-4 w-4 bg-teal-600 rounded-full" animate={subItemControls} custom={3} initial={{ x: -100, opacity: 0 }}></motion.div>
                </motion.div>
            </motion.div>
            <button
                className="h-8 w-48 bg-teal-500  text-white rounded-md m-2"
                onClick={sequence}
            >
                Controls
            </button> */}
            {/* CONTROLES DINÁMICOS
            Se puede hacer uso de los controles dinámicos, de la misma manera que usaríamos las variantes dinámicas. Se usa también la propiedad custom
            para definir el valor con el que se hará dinamismo. */}
            {/* <ul>
                <motion.li custom={0} animate={controls} className="h-8 w-48 bg-teal-600 my-2 rounded-md" />
                <motion.li custom={1} animate={controls} className="h-8 w-48 bg-teal-600 my-2 rounded-md" />
                <motion.li custom={2} animate={controls} className="h-8 w-48 bg-teal-600 my-2 rounded-md" />
                <button
                    className="h-8 w-48 bg-teal-500 border-2 border-teal-600 text-white"
                    onClick={() => controls.start(i => ({
                        opacity: 0,
                        x: 100,
                        transition: { delay: i * 0.3 },
                    }))}
                >
                    Controls
                </button>
            </ul> */}
        </div>
    )

}
export default MyComponent;