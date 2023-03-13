import './App.css';
import './components/Score';
import Quiz from './components/Quiz';
import Menu from './components/Menu';
import Score from './components/Score';
import { createContext, useState } from 'react';

export const DataContect = createContext()

function App() {
  const [appState,setAppState] = useState('menu')
  const [score,setScore] = useState(0)
  return (
    <DataContect.Provider value={{appState,setAppState,score,setScore}}>
      <div className="App">
        <h1>Game Quiz</h1>
        {appState === 'menu' && <Menu/>}
        {appState === 'quiz' && <Quiz/>}
        {appState === 'score' && <Score/>}
      </div>
    </DataContect.Provider>
  );
}


export default App;
