import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad }) {
  const total = good + bad + neutral;
  if (total === 0) {
    return <h1>No feedback given</h1>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={(good - bad) / total} />
          <StatisticLine text="positive" value={`${(good / total) * 100} %`} />
        </tbody>
      </table>
    </div>
  );
}
