import React from 'react';
import { Provider } from 'react-redux'
import store from './store.js'
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import styles from './styles/styles.css'


const App = () => {
  return(
    <Provider store={store}>
      <main>
        <h1>Aprendiendo REDUX</h1>
        <Jugadores />
        <EquipoSeleccionado />
      </main>
    </Provider>
  )
}

export default App;
