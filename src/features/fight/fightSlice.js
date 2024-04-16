//Un Slice est une partie du store, ce slice gére les players et les monster et rien d'autre

// Si on veut venir modifier les données des players ou du Monster c'est ici qu'on le fait. 


import { createSlice } from "@reduxjs/toolkit";
import Laura1 from '../../assets/randomrumble1.png';
import Laura2 from '../../assets/randomrumble2.png';
import Laura3 from '../../assets/randomrumble3.png';
import Laura4 from '../../assets/randomrumble4.png';



const initialState = {
  players: [
    {
      name: "Lara Croft",
      image: Laura1,
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 1,
      canPlay: true,
      skills: [
        {
          id: 1,
          name: "Classical Hit",
        },
        {
          id: 2,
          name: "Sword Swirl",
        },
        {
          id: 3,
          name: "Double Hit",
        },
        {
          id: 4,
          name: "Lara's Special",
        }
        
      ],
    },

    {
      name: "Aloy",
      image : Laura2,
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 2,
      canPlay: true,
    },
    {
      name: "Helena",
      image : Laura3,
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 3,
      canPlay: true,
    },
    {
      name: "Ayse",
      image : Laura4,
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 4,
      canPlay: true,
     
    },
  ],
  monster: {
    pv: 800,
    pvMax: 800,
  },
  status: "En cours...",
  playerPlayed : 0,
  
  };


export const fightSlice = createSlice({
  name: "fight",
  initialState,
  // reducer est un objet car on a une propriété (ici la fonction hitMonster) : valeur et virgule
  reducers: {
    hitMonster: (state, action) => {
    //  le code ci dessous est valable sans le tool kit redux et respect 'limmutabilité quand on crée un nouveau state.monster qui etait l'ancien 
      // state.monster = {
      //   ...state.monster, 
      //   pv: state.monster.pv - action.payload.MonsterDecreasePv,
      // }
      
      // Code possible avec le tool kit redux
      state.monster.pv -= action.payload.MonsterDecreasePv

      if (state.monster.pv - action.payload.MonsterDecreasePv > 0) {
        state.monster.pv -= action.payload.MonsterDecreasePv;
      } else {
        state.monster.pv = 0; 
        state.status = "WIN"
      }
    }, 
    hitBack: (state, action) => {
   

      if (state.players[action.payload.playerHit].pv -
        action.payload.playerDecreasePv > 0) {
           
        state.players[action.payload.playerHit].pv -= action.payload.playerDecreasePv;
      
      } else {
        state.players[action.payload.playerHit].pv = 0;
        let count = 0;
        state.players.forEach(player => {
          
          if (player.pv === 0) {
            count += 1; 

          }
        })

        if (count === state.players.length) {
          state.status = "LOSE";

        }
      }
    },
    endOfTurn: (state, action) => {
      state.players[action.payload.player].canPlay = false;
      if (state.playerPlayed + 1 === state.players.length) {
        state.playerPlayed = 0; 
        state.players.forEach(player => {
          player.canPlay = true; 
        })
      } else {
        state.playerPlayed += 1; 
      }
    }
  },
});

// Quand on crée un nouveau reducer il faut l'exporter pour pouvoir l'utiliser en dehors

export const { hitMonster, hitBack, endOfTurn } = fightSlice.actions; 
export default fightSlice.reducer;

// Le code sélectionné crée une tranche dans le magasin Redux. Une tranche est un conteneur qui contient un élément d'état spécifique dans votre application. Dans ce cas, la tranche est appelée « combat » et elle gère l'état des joueurs et du monstre dans la partie.

// Le code commence par importer la fonction createSlice depuis la bibliothèque "@reduxjs/toolkit". Cette fonction permet de créer une tranche et de gérer son état.
//Ensuite, le code définit un état initial pour la tranche. Dans ce cas, l'état initial comprend un ensemble de joueurs, un objet monstre avec sa santé actuelle et maximale, ainsi que quelques autres propriétés.

// Le code crée ensuite un réducteur pour la tranche.Un réducteur est une fonction qui prend l'état actuel et une action en entrée et renvoie un nouvel état. Dans ce cas, le réducteur a deux fonctions : hitMonster et hitBack.

// La fonction hitMonster prend une action en entrée et met à jour la santé du monstre en fonction de la diminution de la santé fournie dans la charge utile de l'action. Le code utilise l'opérateur spread (...) pour mettre à jour l'objet monstre avec les nouvelles propriétés.

// La fonction hitBack est une fonction d'espace réservé utilisée pour les fonctionnalités futures.

// Enfin, le code exporte la tranche et ses actions afin qu'elles puissent être utilisées dans d'autres parties de l'application.