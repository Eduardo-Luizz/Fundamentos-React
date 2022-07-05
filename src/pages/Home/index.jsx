import './style.css'
import { Card } from '../../components/card'
import React, { useState, useEffect } from 'react'; // Isso é hook, comeca com use, hook sao funcoes que permite conectar os recursos de estado e ciclo de vida do react apartir de componentes

export function Home() {

  const [studentName, setStudentName] = useState('Seu nome ...'); // Primeira posicao o estado e o segundo a funcao que atualiza esse estado
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' })

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

  useEffect(() => {

    /* useEffect async
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/Eduardo-Luizz')
      const data = await response.json(); 
        setUser({
        name: data.name,
        avatar: data.avatar_url
      })
      fetchData();
    }
    */

    // Corpo do useEffect
    fetch('https://api.github.com/users/Eduardo-Luizz')
    .then((response) => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch((error) => console.log(error))
  },[]); // [estados que o useEffect depende]

  return (
    <div className="container">
    <header>
    <h1>Lista de presença</h1>
    <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt="Foto de perfil"></img>
    </div>
    </header>
    
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