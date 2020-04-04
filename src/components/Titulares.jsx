import React from 'react'
import { connect } from 'react-redux'

const Titulares = ({titulares, quitarAsignacion}) => {
    return (
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map(item => (
                        <article className="titular" key={item.id}>
                            <div>
                                <img src={item.foto} alt={item.nombre} width="100" height="100"/>
                                <button onClick={() => quitarAsignacion(item)}>X</button>
                            </div>
                            <p>{item.nombre}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    titulares: state.titulares
})

// funciones que se convierten en props
const mapDispatchToProps = dispatch => ({
    quitarAsignacion(item){
        dispatch({
            type: 'QUITAR_ASIGNACION',
            item
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)