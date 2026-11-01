import { useState } from 'react'

  const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = bad + good + neutral
  const average = ((-1 * bad) + (0 * neutral) + (1* good))/total
  const percentage = average * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'></Button>
      <Button onClick={() => setBad(bad + 1)} text='bad'></Button>
      <p>good{good}</p>
      <p>neutral{neutral}</p>
      <p>bad{bad}</p>
      <p>total{total}</p>
      <p>average{average}</p>
      <p>percentage{percentage}%</p>
    

    </div>
  )
}

export default App