import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function Pop({ action }) {
  return (
    <div className='flex justify-center items-center flex-col mb-4 border-teal-300 w-1/4 h-40 border-2 rounded-md'>
      <h1 className='text-teal-600 text-5xl mb-4'>Pop Mamalón</h1>
      <button
        className='bg-teal-500 text-white w-48 h-8 rounded-md hover:scale-105 transition-all border-2 border-teal-600'
        onClick={() => action()}
      >
        Cerrar Pop</button>
    </div>
  )
}

function App() {
  const [pop, setPop] = useState(false);
  const [title, setTitle] = useState(true);
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <CSSTransition
        in={title} // Define el condicional que seguirá para poder renderizar
        timeout={300} // Define el tiempo que la animación tardará en completarse
        unmountOnExit // Define que el elemento será desmontado una vez se salga de el
        classNames='alert' // Define el nombre de las clases que controlarán el elemento
        onEnter={() => setPop(false)} // Define una función que se ejecutará a la entrada del elemento
        onExited={() => setPop(true)} // Define una función que se ejecutará a la salida del elemento
        // Hay ligeras variaciones en algunos escuchadores de métodos para exit y enter que son
        // enter, entering, entered
        // exit, exiting, exited
        // Que actuarán apenas se active, cuando está activando o al terminar de activar
      >
        <h1 className='text-teal-600 text-5xl mb-4'>Título Mamalón</h1>
      </CSSTransition>
      <CSSTransition
        in={pop}
        timeout={300}
        unmountOnExit
        classNames='alert'
        onEnter={() => setTitle(false)}
        onExited={() => setTitle(true)}
      >
        <Pop action={() => setPop(false)} />
      </CSSTransition>
      <button
        className='bg-teal-500 text-white w-48 h-8 rounded-md hover:scale-105 transition-all border-2 border-teal-600'
        onClick={() => setTitle(false)}
      >
        Clickéame pendejo</button>
    </div>
  );
}

export default App;