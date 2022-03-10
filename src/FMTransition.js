import React from "react";
import { motion } from 'framer-motion';

function MyComponent() {
    const containerDC = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    const containerSG = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: .3,
                staggerChildren: .3,
                // staggerDirection: -1,
                when: "beforeChildren",
                // repeat: 2,
                // repeatType: "loop",
                // repeatDelay: 1,
            }
        }
    }

    const item = {
        hidden: { x: -100, opacity: 0 },
        show: { x: 0, opacity: 1 }
    }
    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            {/* TRANSICIÓN
            Sabemos ya que podemos determinar ciertos atributos a transition para definir el comportamiento de las animaciones.
            Tenemos propiedades que ayudan al ORQUESTAMIENTO, como delay.
            También propiedades que hacen trabajo de animaciones lisas, como tween, stifness, o spring, para un pequeño "rebote".
            Podemos definir diferentes tipos de transiciones declarando variables de propiedades CSS con objetos de transicón.
            Con default podemos decir que a las demás propiedades no definidas se les trate con el defecto. */}
            {/* <motion.div
                className="h-24 w-24 rounded-full bg-teal-600"
                initial={{opacity: 0}}
                animate={{ x: 100, y: 100, opacity: 1 }}
                transition={{
                    delay: 1,
                    x: { type: "spring", stiffness: 100 },
                    default: { duration: 2 },
                }}
            /> */}
            {/* ORQUESTAMIENTO
            La propiedad que puede ayudar con este orquestamiento de eventos con los elementos es delay, que dará un retardo definido
            a las animaciones. Puede ser también aplicado a los elementos hijos de otro elemento. En este caso usamos una propiedad llamada
            delayChildren, que ayudará a dar un retardo a las animaciones de los componentes hijos. Se puede aprovechar haciendo uso de la 
            propiedad de propagación.

            delayChildren
            Esta propiedad da un retardo a las animaciones de los componentes hijos, medido en segundos.

            staggerChildren
            Esta propiedad en español llamada escalonado de hijos puede dar como lo dice el nombre un efecto de 
            escalón para las animaciones de los componentes hijos. Medido en segundos que van en aumento. 

            staggerDirection
            Esta propiedad puede ayudar a cambiar el orden de las animaciones de arriba a abajo o de abajo a arriba con 1 o -1.

            when 
            La propiedad ayuda a definir el comportamiento de las relaciones con respecto a sus hijos. En este caso
            beforeChildren hará que las animaciones de los componentes hijos se realicen antes de la del padre.
            afterChildren hará que las animaciones de los componetnes padres se realicen antes que la de los hijos.

            repeat
            La propiedad repeat hará que las animaciones se repitan cierto número de veces antes de formalmente concluir.
            repeatType
            Podemos definir la manera de repetición de las animaciones, ejemplos son: loop, reverse y mirror.
            repeayDelay
            Podemos definir un tiempo de descanso antes de volver a la repetición, medidio en segundos.*/}
            {/* <motion.ul
                className="bg-teal-600 w-96 h-96 flex flex-col justify-around items-center rounded-lg"
                variants={containerSG}
                initial="hidden"
                animate="show"
            >
                <motion.li className="bg-white h-12 w-48 rounded-lg" variants={item} />
                <motion.li className="bg-white h-12 w-48 rounded-lg" variants={item} />
                <motion.li className="bg-white h-12 w-48 rounded-lg" variants={item} />
            </motion.ul> */}
            {/* TWEEN 
            Tween es el tipo de animación por default.
            Se usa duration para determinar la longitud de la animación.
            Se usa ease para definir la relación de tiempo con la animación.
            Se usa from para dar un valor de inicio de la animación.
            Se usa times, son los keyframes para especificar ciertos valores de tiempo a ciertas propiedades.*/}
            {/* <motion.div
                className="bg-teal-600 h-14 w-96 rounded-lg"
                animate={{ scale: 1.5 }}
                transition={{ from: .5, duration: 2, type: "tween" }}
            /> */}
            {/* SPRING
            Simula físicas de resorte para movimientos realistas.
            bounce provee físicas de rebote
            damping provee físicas de fuerzas oponentes
            mass provee físicas de masas a los elementos
            stiffness provee físicas de rígidez al resorte
            velocity provee una velocidad inicial al resorte
            restSpeed cierra la animación si la velocidad absoluta cae debajo del valor y la delta
            es menor al restDelta
            restDelta cierrta la animación si la distancia es menor a este valor y la velocidad es 
            menor al restSpeed*/}
            {/* <motion.div
                className="bg-teal-600 h-20 w-20 rounded-lg"
                // animate={{ rotate: 180 }}
                animate={{ x: 100 }}
                transition={{ type: 'spring', bounce: .8 }}
            /> */}
            {/* INERTIA */}
            {/* <motion.div
                className="bg-teal-600 h-20 w-20 rounded-lg"
                drag
                dragTransition={{
                    min: 0,
                    max: 100,
                    bounceStiffness: 100
                }}
                animate={{ rotate: 180 }}
                transition={{ type: "inertia", velocity: 50 }}
            /> */}
        </div>
    )
}
export default MyComponent;