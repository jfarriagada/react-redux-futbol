import React from 'react'
import { connect } from 'react-redux'


const Jugadores = ({jugadores, agregarTitular, agregarSuplentes}) => {
    return (
        <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(item => (
                    <article key={item.id}>
                        <img src={item.foto} alt={item.nombre} width="100" height="100"/>
                        <h3>{item.nombre}</h3>
                        <div>
                            <button onClick={() => agregarTitular(item)}>Titular</button>
                            <button onClick={() => agregarSuplentes(item)}>Suplente</button>
                        </div>
                    </article>
                ))
            }
        </div>
        </section>
    )
}

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

// Funciones que se convierten en props
// acciones que son enviadas al recuder para cambiar el estado
const mapDispatchToProps = dispatch => ({
    agregarTitular(item){
        dispatch({
            type: "AGREGAR_TITULAR",
            item
        })
    },
    agregarSuplentes(item){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            item
        })
    }
})

/*
    connect, conectar con el store global y recibe dos parametros
    mapea lo que tiene en el estado y las convierte en propiedades
    mapea las funciones y las convierte en propiedades
*/
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)