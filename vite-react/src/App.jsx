import './App.css'
import MyButton from './MyButton';

function WelcomeMessage(name){
  return <h1>Welcome, {name}</h1>;
}

function Greetings(isMorning){
  if(isMorning){
    return <h1>Good Morning all..</h1>;
  }
  return <h1>Good Evening all..</h1>;
}

function alert(message){
  return <div>{message}</div>;
}

function showAlert(condition, message){
  if(condition){
    return alert(message);
  }
}

function App() {

  const now = new Date();
  const isMorning = now.getHours() < 12;

  return (
    <div>
      {WelcomeMessage("David")}
      {MyButton("David")}

      {WelcomeMessage("Daisy")}
      {MyButton("Daisy")}
      
      {WelcomeMessage("Emmanuel")}
      {MyButton("Emmanuel")}
      
      {Greetings(isMorning)}
      {<h2>{now.toLocaleTimeString()}</h2>}
      {showAlert(true, "Trial Alert Message...")}


    </div>
  );
}

export default App
