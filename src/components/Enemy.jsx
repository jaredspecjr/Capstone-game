import React from "react";
import PropTypes from "prop-types";
import enemy from "../assets/images/swordsman_t.png";
import EnemyTxt from "./EnemyTxt";
import PlayerTxt from "./PlayerTxt";
import PotionTxt from "./PotionTxt";

function Enemy(props) {
  const ENEMYSTATUS = {
    width: `${props.enemyHealth}%`
  };


  let currentContent = null;
  if(props.enemyAttacked === true){
    currentContent = <EnemyTxt playerHurt={props.playerHurt} didEnemyAttack={props.didEnemyAttack}/>;
  } else if(props.playerAttacked === true){
    currentContent = <PlayerTxt enemyHurt={props.enemyHurt} damagePlayer={props.damagePlayer}
      isEnemyDefeated={props.isEnemyDefeated}/>;
  } else if(props.potionUsed === true){
    currentContent = <PotionTxt amountHealed={props.amountHealed}
      damagePlayer={props.damagePlayer}/>;
  } else {
    currentContent = "lol";
  }
  let enemyWidth = ["enemy"];
  if(props.playerAttacked === true){
    enemyWidth.push("enemyDamaged");
  } else if (props.enemyAttacked === true){
    enemyWidth.push("enemyAttack");
  }

  return (
    <div className="container">
      <div className="panel">
        <div className="healthBarStyle">
          <div style={ENEMYSTATUS} className="enemyHealth">
            {props.enemyHealth}
          </div>
        </div>
      </div>
      <div className="panel">
        <img src={enemy} className={enemyWidth.join(" ")}/>
      </div>
      <div className="panel">
        {currentContent}
      </div>
      <style jsx>{`
          .container {
            height: 400px;
            display: grid;
            grid-template-columns: repeat(3 , 1fr);
            grid-template-rows: repeat(3, 1fr);
          }
          .panel {

          }
          .panel:nth-child(1) {
            display: flex;
            justify-content: flex-end;
            grid-row: 1 / 2;
            grid-column: 2 / 4;
          }
          .panel:nth-child(2) {
            display: flex;
            justify-content: center;
            grid-row: 2 / 3;
            grid-column: 2 / 4;
          }
          .panel:nth-child(3) {
            grid-row: 3 / 4;
            grid-column: 1 / 4;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .enemy {
            width: 135px;
          }
          .theClass {
            width: 135px;
          }
          .enemyDamaged{
            animation-name: damaged;
            animation-duration: .3s;
            animation-iteration-count: 1;
          }
          .enemyAttack{
            animation-name: attack;
            animation-duration: .2s;
            animation-iteration-count: 2;
          }
          @keyframes attack{
            0%{transform: translateY(0px)}
            50%{transform: translateY(-40px)}
            100%{transform:translateY(0px)}
          }
          @keyframes damaged{
            0%{transform: translateX(0px)}
            10%{transform: translateX(-5px)}
            15%{transform: translateX(5px)}
            20%{transform: translateX(-5px)}
            25%{transform: translateX(5px)}
            30%{transform: translateX(-5px)}
            35%{transform: translateX(5px)}
            40%{transform: translateX(-5px)}
            45%{transform: translateX(5px)}
            50%{transform: translateX(-5px)}
            55%{transform: translateX(5px)}
            60%{transform: translateX(-5px)}
            65%{transform: translateX(5px)}
            70%{transform: translateX(-5px)}
            75%{transform: translateX(5px)}
            80%{transform: translateX(-5px)}
            85%{transform: translateX(5px)}
            90%{transform: translateX(-5px)}
            95%{transform: translateX(5px)}
            100%{transform: translateX(0px)}
          }
          .enemyHealth {
            background-color: #A50104;
            height: 30px;
            transition: width 1s; background-color: 1s;
            color: white;
          }
          .healthBarStyle {
            border: 1px solid #757780;
            margin-right: 10px;
            height: 30px;
            width: 300px;
            background-color: #757780;
          }
      `}</style>
    </div>
  );
}

Enemy.propTypes = {
  enemyHealth: PropTypes.number.isRequired,
  enemyAttacked: PropTypes.bool.isRequired,
  playerHurt: PropTypes.number.isRequired,
  didEnemyAttack: PropTypes.func.isRequired,
  playerAttacked: PropTypes.bool.isRequired,
  enemyHurt: PropTypes.number.isRequired,
  isEnemyDefeated: PropTypes.func.isRequired,
  damagePlayer: PropTypes.func.isRequired,
  potionUsed: PropTypes.bool.isRequired,
  amountHealed: PropTypes.number.isRequired,
};

export default Enemy;
