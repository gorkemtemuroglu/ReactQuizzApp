function FinishScreen({ dispatch, highscore, points, maxPossiblePonits }) {
  const percentage = (points / maxPossiblePonits) * 100;

  let emoji;
  if (percentage === 100) emoji = "🪙";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😋";
  if (percentage >= 0 && percentage < 50) emoji = "🫥";

  console.log(highscore);

  return (
    <>
      <p className="result">
        {emoji}You Scored <strong>{points}</strong> out of {maxPossiblePonits} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(highscore : {highscore} point)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
