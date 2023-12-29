import Confetti from "react-confetti";
import PropTypes from "prop-types";

export default function Game(props) {
  return (
    <main>
      {props.win && <Confetti width={800} height={400} className="confetti" />}

      <div className="dice-container">{props.diceElements}</div>
      {props.win ? (
        <button className="roll-dice" onClick={props.restart}>
          Restart
        </button>
      ) : (
        <button className="roll-dice" onClick={props.rollDice}>
          Roll
        </button>
      )}
    </main>
  );
}

Game.propTypes = {
  win: PropTypes.bool.isRequired,
  diceElements: PropTypes.array.isRequired,
  restart: PropTypes.func.isRequired,
  rollDice: PropTypes.func.isRequired,
};
