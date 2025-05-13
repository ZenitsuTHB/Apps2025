import React, { useEffect } from 'react'

function Chuck() {
  const API = 'https://api.chucknorris.io/jokes/random'

  const [chiste, setChiste] = useEffect()

  function otherJoke() { }

  return (
    <div>
      <h3>Chistecillo malo de Chuck Norris</h3>
      <p>{chiste}</p>
      <button onClick={otherJoke}>Otro chiste</button>
    </div>
  )
}

export default Chuck
