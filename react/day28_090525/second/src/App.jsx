import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //let name = Mia Wallace

  let [name, setName] = useState()
  let [Counter, setCounter] = useState(0)
  let [number1, setNum1] = useState(0)
  let [number2, setNum2] = useState(0)
  let [result, setResult] = useState(0)
  let [message, setMessage] = useState()

  const movies = [
    {
      title: 'Apocalypto',
      direction: 'Mel Gibson'
    },
    {
      title: 'La Milla Verde',
      direction: 'Frank Darabont'
    },
    {
      title: 'Apocalypto',
      direction: 'Mel Gibson'
    }
  ]

  function changeName() {
    //name = "Vincent Vega"
    //title.current.innerText
    setName('Vincent Vega')
  }

  function sum() {

    setResult(number1 + number2)

  }

  const [title, setTitle] = useState('...')
  const [direction, setDirection] = useState('...')
  const [CounterMovie, setCounterMovie] = useState(0)
  function moviesData() {

    setTitle(movies[CounterMovie].title)
    setDirection(movies[CounterMovie].direction)

    //control the end of the array
    if (CounterMovie < movies.length - 1) {
      setCounter(CounterMovie + 1)

    }
    else {
      setCounter(0);
    }

    let text = <h2>The direction of the movie <span className='title'>{movies[Counter].title}</span> Correspond to <span className='direction'>{movies[Counter].direction}</span></h2>;
    setMessage(text);
  }

  return (
    <div className="App">
      <h1>Me llamo <span>{name}</span></h1>
      <button onClick={changeName}>Change</button>
      <hr />
      <h1>{Counter}</h1>
      <button onClick={() => setCounter(++Counter)}>Increase</button>
      <button onClick={() => setCounter(Counter - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Restore</button>
      <hr />
      <div className='caja'>
        <input type='number' value={number1} onChange={(e) => setNum1(Number(e.target.value))} />+
        <input type='number' value={number2} onChange={(e) => setNum2(Number(e.target.value))} />=
        <input type='number' value={result} disabled />
        <button onClick={sum}>Sumar</button>
      </div>
      <hr />
      <div>
        <div className='ArrayTitle'>
          <button onClick={moviesData}>See Next</button>
          <div>{message}</div>
        </div>
      </div>

    </div>
  );
}

export default App;
