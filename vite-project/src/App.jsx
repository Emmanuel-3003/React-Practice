import './App.css'
import Card from './ProfileCard'

function App() {

  const handleHobbyClick = (hobby) => {
    alert(`You clicked on ${hobby}`);
  };

  const emm = {
    name : "Emmanuel", 
    age : 25, 
    isMember : true, 
    hobbies : ["Reading", "Traveling", "Watching F1"],
    onHobbyClick : handleHobbyClick
  }

  const jer = {
    name : "Jerrard", 
    age : 21, 
    isMember : false, 
    hobbies : ["Sleeping", "Swimming", "Gamming"],
    onHobbyClick : handleHobbyClick
  }


  return (
    <div className = "card-container">
      <h1>Welcome to React</h1>
      <Card {...emm}/>
      <Card {...jer}/>
    </div>
  )
}

export default App
