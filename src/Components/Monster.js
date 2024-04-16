import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import  loup  from '../assets/wolf-removebg-preview.png';


const Monster = () => {
  // useSelector est le hook qui va permettre de dire de recupérer les données dans le store

  // Monster est relié au store grace au useSelector donc si on change les données elles vont se mettre a jour automatiquement sans avoir bepsin de rafraichir la page
  const monster = useSelector((store) => store.fight.monster);
  console.log(monster);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="row justify-content-center">
                  <div className="col-sm-3 wolf-img-ctn">
                    <span
                      className="badge badge-danger ml-2 "
                      id="degatSpanMonster"
                    ></span>
                 
                    <img
                      className="img-fluid wolf-img"
                      src={loup}
                      alt="monster"
                      />
               
                  </div>

                </div>
              </div>
              <ProgressBar
                pv={monster.pv}
                pvMax={monster.pvMax}
                bgType="bg-danger"
                faType="fa-heart"
                barName=" : pv"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Monster;