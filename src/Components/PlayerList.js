import React from 'react';
import PlayerCard from './PlayerCard';
import { useSelector } from 'react-redux';

// On déclare la variable players qui est un tableau contenant des objets Players


// Cette version utilise un simple tableau d'objets joueurs nommés joueurs. La fonction displayPlayers mappe ce tableau pour restituer les composants PlayerCard pour chaque joueur. Puisque les données du lecteur sont statiques et ne changent pas, il n'est pas nécessaire de les gérer dans l'état du composant.
//.map est une boucle




const PlayerList = () => {

  const players = useSelector(store => store.fight.players);
  return (
    <div className=" card_player d-flex justify-content-center gap-5 mt-5">
      {/* { ici on récupérer chaque player du tableau players, l'index du tableau, puis il va créer une playerCard en pssant comme props le player en question } */}

      {players.map((player, index) =>
        player.pv > 0 ? (
          //  Key = il est utilisé pour identifier chaque élément du tableau des joueurs. La clé est définie sur l'index du lecteur dans le tableau. Cela est nécessaire car le tableau peut changer et React exige que chaque élément du tableau ait une clé unique. En utilisant l'index comme clé, le composant peut garantir que chaque lecteur est correctement mis à jour et rendu en cas de modification du tableau.

          <PlayerCard key={index} player={player} />
        ) : (
          <p key={index} className ="textWhite">{player.name} est mort...</p>
        )
      )}
    </div>
  );
};



export default PlayerList;
























// import React from 'react';
// import PlayerCard from './PlayerCard';


// class PlayerList extends React.Component {
//   constructor(props) {
//     super(props);
//     // const players = [];
//     this.state = {
//       players: {
//         1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
//         2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
//         3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
//         4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
//       }
//     }
//   }
//   displayPlayers = () => {
//     return Object.keys(this.state.players).map(key => (
//       <PlayerCard key={this.state.players[key].id} player={this.state.players[key]} />
//     ));
//   }
//   render() {
//     return (
//       <div className='row'>
//         {this.displayPlayers()}
//       </div>
//     );
//   }

// }

// export default PlayerList;