export default function FeedbackOption({onGoodClicked, onNeutralClicked, onBadClicked}) {
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <span>
          <button onClick={onGoodClicked}>good</button>
        </span>
        <span>
          <button onClick={onNeutralClicked}>neutral</button>
        </span>
        <span>
          <button onClick={onBadClicked}>bad</button>
        </span>
      </div>
    </div>
  );
}
