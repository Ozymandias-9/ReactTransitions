import React from "react";
import { motion } from 'framer-motion';

function MyComponent() {
    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            {/* GESTOS
            Los gestos son herramientas que también tenemos en React, y se refieren a los escuchadores de eventos
            con los que podemos manejar que es lo que debe de hacer un componente dado un evento, por ejemplo,
            un hover o un click. Para esto ocupamos:
            whieHover, whileTap, whileFocus, whileDrag, whileInView
            Eventos a los que podemos pasar animaciones para que sean ejecutadas cuando se dispare el evento.
            Dentro de estos eventos podemos usar variantes para manejar las animaciones con objetos.
            La propagación de variantes aplicara como lo aplicaría en animaciones normales de sin gestos. 
            
            
            Dado que hay veces en que los gestos no aplican a ciertos tipos de elementos, podemos ocupar propiedades similares,
            como onMouseEnter u onMouseLeave para manejar los eventos controlados por estas funciones. */}
            {/* <motion.button
                className="bg-teal-600 h-24 w-24 rounded-lg text-white"
                whileHover={{
                    scale: 1.2,
                    transition: { duration: .3 },
                }}
                whileTap={{ scale: 0.9 }}
            >
                Clickéame Puta
            </motion.button> */}
            {/* <motion.div
                className="bg-teal-600 h-24 w-24 rounded-lg text-white"
                drag
                whileDrag={{
                    scale: 1.2,
                    transition: { duration: .3 },
                }}
                // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0, }}
                dragSnapToOrigin={true}
            /> */}
        </div>
    )
}
export default MyComponent;