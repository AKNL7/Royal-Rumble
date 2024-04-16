import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { useSelector } from 'react-redux';
import GameOver from './GameOver';
import Victory from './Victory';

// Bien tansformer les parenthéses en accolades si on inclus des fonctions avant le return
const App = () => {
  const status = useSelector((state) => state.fight.status);

  return (
    
    <div className="App">
      {status === "En cours..." ? (
        <>
         <Monster />
          <br></br>
          <section className="container-fluid">
            <PlayerList />
          </section>
        </>

      ) : status === "DEFEAT..." ? (
    <GameOver />
      ) : (
      <Victory />
      )}
 </div>
  );
};
        
export default App;   
 
        
          
        
   
          

   
    


