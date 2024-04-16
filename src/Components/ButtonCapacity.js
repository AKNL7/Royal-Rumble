import React from 'react';
import { useDispatch } from 'react-redux';
import { hitMonster, hitBack, endOfTurn } from '../features/fight/fightSlice'; 


// UseDispacth est un hook qui permet de recuperer et utiliser/donner les actions aux composants

// Dans PLayerCard Button capacity recoit player alors je peux le passer en props. 
const ButtonCapacity = ({ playerId, playerCanPlay, player }) => {

    const dispatch = useDispatch();
// Mis en accolade MonsterDecreasePv deviens un objet
    const combat = () => {
        dispatch(hitMonster(
            { MonsterDecreasePv: 10 },
            { Skills: 15 }
        ));
        // console.log("aie !");
        console.log(playerId-1);
        dispatch(hitBack(
            {
                playerHit: playerId - 1,
                playerDecreasePv: 5
            }
        ));
        dispatch(
            endOfTurn({
                player: playerId -1,
            })
        )
    };

   



 
    //   const players = useSelector(store => store.fight.players);
    return (
      <>
        {playerCanPlay ? (
          <button
            type="button"
            // OnClick declanche une fonction anonyme qui va declencher la fonction combat
            onClick={() => combat()}
            className="btn btn-success material-tooltip-main "
          >
            hit
            <i className="fas fa-bomb"></i>5
            <i className="fas fa-fire-alt"></i> - 5
          </button>
        ) : (
          <button
            type="button"
            // OnClick declanche une fonction anonyme qui va declencher la fonction combat

            className="btn btn-success material-tooltip-main"
            disabled
          >
            hit
            <i className="fas fa-bomb"></i> 5<i className="fas fa-fire-alt"></i>
            - 5
          </button>
        )}
      </>
    );
};

export default ButtonCapacity;



