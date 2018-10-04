import React from "react";
import PropTypes from "prop-types";
import EnemyTxt from "./EnemyTxt";
import PlayerTxt from "./PlayerTxt";
import PotionTxt from "./PotionTxt";
import head from "../assets/images/head.png"
import jaw from "../assets/images/jaw.png"
import right from "../assets/images/right.png"
import left from "../assets/images/left.png"

function Boss(props) {
  const ENEMYSTATUS = {
    width: `${props.enemyHealth}%`
  };

  let currentContent = null;
  if(props.enemyAttacked === true){
    currentContent = <EnemyTxt playerHurt={props.playerHurt} didEnemyAttack={props.didEnemyAttack}
      type={props.type}
      stronger={props.stronger}/>;
  } else if(props.playerAttacked === true){
    currentContent = <PlayerTxt enemyHurt={props.enemyHurt} damagePlayer={props.damagePlayer}
      isEnemyDefeated={props.isEnemyDefeated}/>;
  } else if(props.potionUsed === true){
    currentContent = <PotionTxt amountHealed={props.amountHealed}
      damagePlayer={props.damagePlayer}/>;
  } else {
    currentContent = "lol";
  }


  return (
    <div className="container">
      <div>
        <div className="healthBarStyle">
          <div style={ENEMYSTATUS} className="enemyHealth">
            {props.enemyHealth}
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="bossContainer">
          <div className="topHalf">
            <img className="head headIdle" src={head}/>
            <img className="jaw jawIdle" src={jaw}/>
          </div>
          <div className="bottomHalf">
            <img className="left leftIdle" src={left}/>
            <img className="right rightIdle" src={right}/>
          </div>
        </div>
      </div>
      <div className="panel">
        {currentContent}
      </div>
      <style jsx>{`
          .container{
            margin-top: -20px;
          }
          .bossContainer{
            display: flex;
            flex-direction: column;
          }
          .topHalf{
            display: flex;
            flex-direction: column;
            align-self: center;
          }
          .head{
            align-self: center;
            z-index: 1;
          }
          .jaw{
            align-self: center;
            width: 150px;
            padding-left: 8px;
            position: relative;
            transform: translateY(-60px);
          }
          .bottomHalf{
            display: flex;
            justify-content: space-around;
            transform: translateY(-60px);
          }
          .headIdle{
            animation-name: headAnimate;
            animation-duration: 4s;
            animation-iteration-count: infinite;
          }
          @keyframes headAnimate{
            0%{transform: translateY(0px)}
            50%{transform: translateY(10px)}
            100%{transform: translateY(0px)}
          }
          .jawIdle{
            animation-name: jawAnimate;
            animation-duration: 4s;
            animation-iteration-count: infinite;
          }
          @keyframes jawAnimate{
            0%{transform: translateY(-60px)}
            50%{transform: translateY(-20px)}
            100%{transform: translateY(-60px)}
          }
          .leftIdle{
            animation-name: leftAnimate;
            animation-duration: 4s;
            animation-iteration-count: infinite;
          }
          @keyframes leftAnimate{
            0%{transform: translateY(0px)}
            50%{transform: translateY(12px)}
            100%{transform: translateY(0px)}
          }
          .rightIdle{
            animation-name: rightAnimate;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-delay: .5s;
          }
          @keyframes rightAnimate{
            0%{transform: translateY(0px)}
            50%{transform: translateY(12px)}
            100%{transform: translateY(0px)}
          }
          .enemyHealth {
            background-color: #A50104;
            height: 40px;
            transition: width 1s; background-color: 1s;
            color: white;
          }
          .healthBarStyle {
            border: 1px solid #757780;
            margin-right: 10px;
            height: 40px;
            width: 100%;
            background-color: #757780;
          }

      `}</style>
    </div>
  );
}

Boss.propTypes = {
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

export default Boss;
