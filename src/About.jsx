import PropTypes from "prop-types";

export default function About(props) {
  return (
    <main className="instruction">
      <h1>TENZI Game Instructions</h1>
      <p>
        Click the Die to lock. If the die turns green, that means it is locked.
        You can click again to unlock it if you accidentally locked it.
        <br />
        Click Roll to roll the unlocked dice.
        <br />
        You win when all the dice have the same value.
      </p>
      <button
        className="roll-dice"
        onClick={() => props.hideInstruction(false)}
      >
        Play
      </button>
    </main>
  );
}

About.propTypes = {
  hideInstruction: PropTypes.func.isRequired,
};
