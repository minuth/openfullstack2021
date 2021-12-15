import { useState } from "react";
import FeedbackOption from "./components/FeedbackOption";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onGoodClicked = () => {
    setGood(good + 1);
  };

  const onNeutralClicked = () => {
    setNeutral(neutral + 1);
  };

  const onBadClicked = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <FeedbackOption
        onGoodClicked={onGoodClicked}
        onNeutralClicked={onNeutralClicked}
        onBadClicked={onBadClicked}
      />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
