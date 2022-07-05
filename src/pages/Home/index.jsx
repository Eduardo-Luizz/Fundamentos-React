import './style.css'
import { Card } from '../../components/card'
import React, { useState } from 'react';

export function Home() {

  const [studentName, setStudentName] = useState('Seu nome ...'); // Primeira posicao o estado e o segundo a funcao que atualiza esse estado
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setStudents( estadoAnterior => [...estadoAnterior, newStudent]);
  };

  return (
    <div className="container">
    <h1>Lista de presença</h1>
    
    <input 
      type="text" 
      placeholder="Digite seu nome " 
      onChange={event => setStudentName(event.target.value)}
    />


    <button type="button" onClick={handleAddStudent}>Adicionar</button>

    {
      students.map(student => (
      <Card
        key={student.time}
        name={student.name} 
        time={student.time}>
      </Card>
      ))
    }
    </div>
  )
}