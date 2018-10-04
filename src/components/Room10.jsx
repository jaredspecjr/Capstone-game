import React from "react";
import PropTypes from "prop-types";
import Boss from "./Boss";

function Room10(props){
  if (props.enemyIsDefeated === true){
    return (
      <div>
        <div className="container">
          <p></p>
        </div>
        <style jsx>{`
            .container {
              color: white;
              height: 400px;
            }
        `}</style>
      </div>
    );
  } else {
    return <Boss playerAttacked={props.playerAttacked}
      enemyAttacked={props.enemyAttacked}
      enemyHealth={props.enemyHealth}
      damagePlayer={props.damagePlayer}
      didEnemyAttack={props.didEnemyAttack}
      enemyHurt={props.enemyHurt}
      playerHurt={props.playerHurt}
      potionUsed={props.potionUsed}
      amountHealed={props.amountHealed}
      isEnemyDefeated={props.isEnemyDefeated}
      type={props.type}
      stronger={props.stronger}/>;
  }
}

Room10.propTypes = {
  enemyIsDefeated: PropTypes.bool.isRequired,
  playerAttacked: PropTypes.bool.isRequired,
  enemyAttacked: PropTypes.bool.isRequired,
  enemyHealth: PropTypes.number.isRequired,
  damagePlayer: PropTypes.func.isRequired,
  didEnemyAttack: PropTypes.func.isRequired,
  enemyHurt: PropTypes.number.isRequired,
  playerHurt: PropTypes.number.isRequired,
  potionUsed: PropTypes.bool.isRequired,
  amountHealed: PropTypes.number.isRequired,
  isEnemyDefeated: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  stronger: PropTypes.bool.isRequired
};

export default Room10;
