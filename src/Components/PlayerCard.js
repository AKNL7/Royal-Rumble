import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';



const PlayerCard = ({ player }) => {

  return (
    <div className="d-flex justify-content-center">
      <div
        key={player.id}
        className="col-md-12 card center position-relative  shadow-lg p-3 mb-5 bg-transparent rounded"
        id={`joueur${player.id}`}
      >
        {!player.canPlay && <div className="cantPlay"></div>}

        <div className="card-body text-center">
          <div className="d-flex justify-content-center">
            <div className="wolf">
              <img src={player.image} alt="randomrumble" />
            </div>
          </div>
          <h5 className="card-title fw-bold text-white">{player.name}</h5>

          <div className=" d-flex flex-column gap-2">
            <ProgressBar
              pv={player.pv}
              pvMax={player.pvMax}
              faType="fa-heart"
              barName=" : pv "
              bgType="bg-danger"
            />
            <ProgressBar
              pv={player.mana}
              pvMax={player.manaMax}
              faType="fa-fire-alt"
              barName=" : mana "
            />

            <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
            <div className="row p-2 g-col-6">
              <div>
                <ButtonCapacity
                  playerId={player.id}
                  playerCanPlay={player.canPlay}
                />
                <ButtonCapacity
                  playerId={player.id}
                  playerCanPlay={player.canPlay}
                />
                <ButtonCapacity
                  playerId={player.id}
                  playerCanPlay={player.canPlay}
                />
                <ButtonCapacity
                  playerId={player.id}
                  playerCanPlay={player.canPlay}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default PlayerCard;

