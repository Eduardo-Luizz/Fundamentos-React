import './style.css'
import { Card } from '../../components/card'

export function Home() {
  return (
    <div className="container">
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite seu nome "/>
    <button type="button">Adicionar</button>
    <Card />
    </div>
  )
}