
import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer greeting="¡Bienvenidos a Malaka Accesorios! 💍" />
    </>
  )
}

export default App
