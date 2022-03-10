import React, { useState } from 'react';
import motion, { Reorder } from 'framer-motion';

function List() {
    const [items, setItems] = useState(['Johnny', 'Pjoe', 'La miau', 'Le', 'El miau'])

    return (
        // REORDER
        // Los elementos reordenables son cubiertos con un Reorder.Group
        // La propiedad axis determina el eje de movimiento que tendrán los elementos
        // Por defecto, Reorder utiliza un ul, pero puede ser cambiado usando la propiedad as
        // Para hacer elementos reordenables, debemos de utilizar Reorder.Item
        // Con la propiedad de value, podemos pasar el valor que representa
        // El escuchador de eventos onReorder disparará la función para hacer el cambio de orden
        <Reorder.Group
            className='w-screen h-screen flex justify-center items-center flex-col'
            axis="y"
            values={items}
            onReorder={setItems}
        >
            {items.map((item, i) => (
                <Reorder.Item
                    className='w-48 h-12 text-white bg-teal-600 m-2 flex justify-center items-center rounded-md'
                    key={item}
                    value={item}
                >
                    {item}
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
}

export default List;