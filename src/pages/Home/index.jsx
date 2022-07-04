import './style.css'
import { Card } from '../../components/card'

export function Home() {
  return (
    <div className="container">
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite seu nome "/>
    <button type="button">Adicionar</button>

    <Card name="Eduardo" time="10:55:30"></Card>
    <Card name="João" time="00:55:05"></Card>
    </div>
  )
}