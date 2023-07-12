import React from "react";
import './index.css';

import imgLogo from './assets/key-concepts.png';
import component from './assets/components.png';
import state from './assets/state.png';
import events from './assets/events.png';
import Card from "./components/Card";

const concepts = [
  {
    title: 'COMPONENTS',
    image: component,
    description: 
    'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'STATE',
    image: state,
    description: 
    'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'EVENTS',
    image: events,
    description: 
    'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  }
]

function App() {
  return (
    <div className="container">
      <div className="intro">
        <img src={imgLogo} alt="" className="logo" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </div>
      <div className="cards">
        <Card img={concepts[0].image} title={concepts[0].title} text={concepts[0].description}/>
        <Card img={concepts[1].image} title={concepts[1].title} text={concepts[1].description}/>
        <Card img={concepts[2].image} title={concepts[2].title} text={concepts[2].description}/>
      </div>
    </div>
  )
}

export default App
