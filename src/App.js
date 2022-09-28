import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  const [q, setQ] = useState("");
  const tasks = [
    "Hur kan du påverka beslut i skolan eller framföra dina åsikter i skolan?",
    "Hur kan du använda din yttrandefrihet och påverka i samhället?",
    "Trots yttrandefrihet och demonstrationsfrihet är vissa saker olagligt att göra, vad?",
    "Var 4:e år är det val i Sverige där alla med rösträtt får rösta. I vilka tre val röstas det i?",
    "Var och när kan man rösta när det är valår?",
    "Vad är en folkomröstning?",
    "Beskriv vad EU och EU-parlamentet är.",
    "Ge exempel på vad staten, regioner och kommuner ansvarar för.",
    "Vilka är riksdagens viktigaste uppgifter?",
    "Vad är regeringens viktigaste uppgifter?",
    "Vad är skillnaden på en monarki och en republik?"
  ]

  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Felicias läxhjälp</h2>
        </div>
        <p className="App-intro">
        </p>
        <button onClick={() => setQ(tasks[Math.floor(Math.random()*tasks.length)])}>Ge mig en fråga!</button>
<p>{q}</p>
      </div>
    );
  }

export default App;
