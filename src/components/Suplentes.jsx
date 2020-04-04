import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({suplentes, quitarAsignacion}) => {
    return (
        <section>
            <h2>Suplentes</h2>
            <div className="cancha">
                {
                    suplentes.map(item => (
                        <article className="suplente" key={item.id}> 
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
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarAsignacion(item){
        dispatch({
            type: 'QUITAR_ASIGNACION',
            item
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)