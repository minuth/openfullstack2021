export default function Anecdote({ text, vote }) {
  return (
    <div>
      <p>{text}</p>
      <p>has vote {vote || 0}</p>
    </div>
  );
}
