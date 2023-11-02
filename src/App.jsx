import { useState } from 'react'
import Card from './assets/Components/Card'
import './App.css'
import Enviado from './assets/Components/Enviado'
import './assets/Estilos/Card.css'

function App() {
  const [mascota, setMascota] = useState({
    nombre: '',
    edad: '',
    raza: ''
  });
  const [show, setShow] = useState(false)
  const [error, setError] = useState (false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(mascota.nombre.length > 2 && mascota.nombre.length < 4 && mascota.edad.length > 5 && mascota.raza.length > 5){

      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }
  console.log(mascota);
  return (
    
    <div className='App'>
      <h2>Mis mascotas</h2>
      {!show &&
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" value={mascota.nombre} onChange={(e)=> setMascota({...mascota, nombre: e.target.value.trimStart()})} /> <br></br>
          <input type="text" placeholder="Edad" value={mascota.edad} onChange={(e)=> setMascota({...mascota, edad: e.target.value.trimStart()})} /> <br></br>
          <input type="text" placeholder="Raza" value={mascota.raza} onChange={(e)=> setMascota({...mascota, raza: e.target.value.trimStart()})} /> <br></br>
          <button>Enviar ➡️</button>
        </form>
      }
      { show ?
        <Enviado nombre={mascota.nombre}  edad={mascota.edad}  nacionalidad={mascota.raza} />
        :
            null
      }
      {error && <h5 style={{color:'red'}}>Por favor chequea que la información sea correcta‼️‼️</h5>}
  
    </div>
    
  )
}

export default App
