// ESTADOS HOOKS Y EVENTOS

import { useState } from "react"


export const UnBoton = () => {
    let [counter, setCounter] = useState (0) // Definicion del estado de "counter" / el (0) es el valor inicial de "counter"
// counter es el estado
// setCounter es la funcion que actualiza el estado (counter) y vuelve a renderizar el componente en el DOM
// Por convencion la primer palabra puede ser cualquiera, y se usa set + esa palabra. Por ejemplo [carrito, setCarrito]

const clickear = () => {
    setCounter (counter + 1) // setCounter actualiza el dom y recibe la asignacion del nuevo estado entre ()
}

        return (
            <div>
                <button onClick={clickear}>Click me</button> 
                <p>Clicks: {counter}</p>
            </div>
        )
}

// onClick = {funcion} se ejecuta la funcion al clickear
