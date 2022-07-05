import './style.css'
import { Card } from '../../components/card'
import React, { useState } from 'react';

export function Home() {

  const [studentName, setStudentName] = useState('Seu nome ...'); // Primeira posicao o estado e o segundo a funcao que atualiza esse estado

  return (
    <div className="container">
    <h1>Nome: { studentName }</h1>
    
    <input 
      type="text" 
      placeholder="Digite seu nome " 
      onChange={event => setStudentName(event.target.value)}
    />


    <button type="button">Adicionar</button>

    <Card name="Eduardo" time="10:55:30"></Card>
    <Card name="João" time="00:55:05"></Card>
    </div>
  )
}