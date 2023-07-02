//PENDIENTE BUSCAR INFO SOBRE IMPORT Y EXPORT REVEER CLASE 3


//COMPONENTES - CLASE 4 -

//Siempre empiezan con mayuscula

export const Componente = () => {
    return (
        <div>

        </div>
    )
}

// Se importa en APP 

import {componente} from './componentes/componente' //ruta del archivo sin extension

// En el return del app se inserta como
<componente /> 

// PROPIEDADES/PROPS

// En el componente: "Este ejemplo no se usa"
export const Componente2 = (props) => { //el parametro props puede ser cualquier palabra y se almacena inicialmente como un objeto vacio que recibe clave/valor
 return (
    <div>
    <p>texto: {props.propiedad}</p>
    <p>texto: {props.otraPropiedad}</p>
    </div>
 )
} 

// Las propiedades se declaran en el llamado del componente en el componente padre

// En el App.jsx o componente padre:
return (
    <div>
        <componente2 propiedad="valor de propiedad" otraPropiedad={20}/> 
        <componente2 propiedad="valor de propieddad2" otraPropiedad={34}/> //se renderiza el mismo objeto con propiedades distintas
        {/* propiedades como string -> "" propiedades como number -> {}  */}
    </div>
)

// Como propiedades se pueden pasar strings, numeros, booleanos, objetos, arrays, funciones o componentes. 
// La palabra props se pude usar como parametro para todos los componentes, es una funcion de scope cerrado.

// SINTAXIS MEJORADA CON DESESTRUCTURACION DE OBJETOS - asi que olvidate de todo lo de arriba, igual este tampoco se usa

export const componente3 = (props) => {
    const { prop1, prop2, prop3 } = props //desestructuracion del objeto props

    return (
        <div>
            <p>nombre: {prop1}</p> //se asignan las constantes de la desetructuracion como propiedades
            <p>apellido: {prop2}</p> 
            <p>ocupacion: {prop3}</p>
        </div>
    )
}

// SINTAXIS MEJORADA CON DESESTRUCTURACION DE OBJETOS MAS PRO - asi que olvidate de las dos anteriores que este es el que va

export const componente4 = ( {prop1, prop2, prop3}) => {
    return (
        <div>
            <p>nombre: {prop1}</p> //se asignan las constantes de la desetructuracion como propiedades
            <p>apellido: {prop2}</p> 
            <p>ocupacion: {prop3}</p>
        </div>
    )
}

