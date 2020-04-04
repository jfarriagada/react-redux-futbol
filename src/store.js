import { createStore } from 'redux'

const initialState = {
    jugadores: [
        {
            id:1,
            nombre: "Alexis Sanchez",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC4UUDbQqi-BwLeGn_t6MbtEOQHMenizSnz4emQiWlnlmwtLnC&usqp=CAU"
        },
        {
            id:2,
            nombre: "Charles Aránguiz",
            foto: "https://pbs.twimg.com/profile_images/877384807755399168/0aySrF6S_400x400.jpg"
        },
        {
            id:3,
            nombre: "Gary Medel",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKQbf0M0KN0uUE8YFelJo0vkj0LTDjU-F8NBpOKcrYE4eI4EMS&usqp=CAU"
        }
    ],
    titulares: [],
    suplentes: []
}

// funcion encargada de hacer los cambios en la app
const reducerEntrenador = (state = initialState, action) => {
    
    switch(action.type){
        case 'AGREGAR_TITULAR':
            return {
                ...state,
                titulares: state.titulares.concat(action.item),
                jugadores: state.jugadores.filter(i => i.id !== action.item.id)
            }
            break
        case 'AGREGAR_SUPLENTE':
            return {
                ...state,
                suplentes: state.suplentes.concat(action.item),
                jugadores: state.jugadores.filter(i => i.id !== action.item.id)
            }
            break
        case 'QUITAR_ASIGNACION':
            return {
                ...state,
                jugadores: state.jugadores.concat(action.item),
                titulares: state.titulares.filter(i => i.id !== action.item.id),
                suplentes: state.suplentes.filter(i => i.id !== action.item.id)
            }
            break
    }

    return state
}

export default createStore(reducerEntrenador)