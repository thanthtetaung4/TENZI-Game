import PropTypes from "prop-types";

export default function Die(props) {
  const die = props?.die;
  return (
    <div
      className={die.isHeld ? "die-face held" : "die-face"}
      onClick={() => props.toggleHold(die.id)}
    >
      <h2 className="die-num">{die.value}</h2>
    </div>
  );
}

Die.propTypes = {
  die: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isHeld: PropTypes.bool.isRequired,
  }),
  toggleHold: PropTypes.func.isRequired,
};
