import React from 'react'

function First({ name, memory = '?' }) {

  //console.log(properties)
  return (
    <div>
      <p>Hola desde First Component</p>
      <p>The micro Computer {name} have  {memory} kb de RAM</p>

    </div>
  )
}

export default First
