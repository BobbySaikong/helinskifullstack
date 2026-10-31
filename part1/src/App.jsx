import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const Updatedtotal = updatedGood + bad + neutral
    setTotal(Updatedtotal)
    const badpoint = -1 * bad
    const updatedAvg = (badpoint + neutral + updatedGood)/Updatedtotal
    setAverage(updatedAvg)
}
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const Updatedtotal = updatedNeutral + bad + good
    setTotal(Updatedtotal)
    const badpoint = -1 * bad
    console.log(badpoint)
    const updatedAvg = (badpoint + updatedNeutral + good)/Updatedtotal
    setAverage(updatedAvg)
}
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const Updatedtotal = updatedBad + good + neutral
    setTotal(Updatedtotal)
    const badpoint = -1 * updatedBad
    const updatedAvg = (badpoint + neutral + good)/Updatedtotal
    setAverage(updatedAvg)
}

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleGood()} text='good'></Button>
      <Button onClick={() => handleNeutral()} text='neutral'></Button>
      <Button onClick={() => handleBad()} text='bad'></Button>
      <p>good{good}</p>
      <p>neutral{neutral}</p>
      <p>bad{bad}</p>
      <p>total{total}</p>
      <p>average{average}</p>
    

    </div>
  )
}

export default App