import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  const handleClick = (hobby) => {
    alert(`You clicked on ${hobby}`)
  };

  const myProfileCard = {
    name: "Emmanuel",
    age: 23,
    isMember: true,
    hobbies: ["F1", "Gaming", "Rubix Cube"],
    onHobbyClick: handleClick
  }

  return (
    <div>
      <h1>Hi there!</h1>
      <ProfileCard {...myProfileCard}/>
    </div>
  )
}

export default App
